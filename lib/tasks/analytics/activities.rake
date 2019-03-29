namespace :activities do

  task :super_admin => :environment do
    id = Setting.find_by(name: 'site_admin_account_id').value
    $super_admin = User.find(id)
  end

  task :top_account => :environment do
    id = Setting.find_by(name: 'default_account_id').value
    $top_account = Account.find(id)
  end

  task :duration do
    $from = 30.days.ago.beginning_of_day
    $to = Date.today.end_of_day
    $duration = ($from...$to)
  end

  desc '最近30天内的PV'
  task :page_views => [:environment, 'activities:super_admin', 'activities:top_account', 'activities:duration'] do
    class LatestPageView < ApplicationRecord; end
    LatestPageView.delete_all
    activity = Course.all.reduce(0) do |sum, course|
      sum + Analytics::Course.new($super_admin, course).participation
        .select{|participation| participation['date'].between?($from, $to)}
        .map{|participation| participation['views']}
        .sum
    end
    LatestPageView.create(activity: activity)
  end

  desc '以院系为单位的最近30天活跃度统计'
  task :colleges => [:environment, 'activities:super_admin', 'activities:top_account', 'activities:duration'] do
    CollegeActivity.delete_all
    Account.where(workflow_state: 'active', parent_account: $top_account).find_each do |account|
      course_ids = Course.where(workflow_state: 'available', account_id: account.self_and_descendant_ids).pluck(:id)
        
      visits = EnrollmentTerm.where(workflow_state: 'active')
        .flat_map {|term| Analytics::Department.new($super_admin, account, term, nil).participation_by_date}
        .select{|participation| participation['date'].between?($from, $to)}
        .sum{|participation| participation['views']}

      courses_criteria = course_ids.size.to_r
      courses_count = WikiPage.where(workflow_state: 'active', context_type: 'Course', context_id: course_ids).pluck(:context_id).uniq.count
      students_count = StudentEnrollment.where(workflow_state: 'active', course_id: course_ids).count.to_r
      activity = ((courses_count * visits) / (courses_criteria * students_count)).to_f rescue 0.0
      CollegeActivity.create(account_id: account.id, account_name: account.name, activity: activity)
    end
  end

  desc '以课程为单位的最近30天课程建设统计'
  task :course_constructions => [:environment, 'activities:duration'] do
    CourseConstructionActivity.delete_all
    Course.where(workflow_state: 'available').find_each do |course|
      syllabus_score = course.syllabus_body.blank? ? 0 : 8
      home_page_score = !course.home_page ? 0 : 8
      announcements_score = course.announcements.none? ? 0 : 8
      groups_score = course.groups.none? ? 0 : 8
      peer_reviews_score = course.assignments.where(peer_reviews: true).none? ? 0 : 8
      discussion_topics_score = course.discussion_topics.none? ? 0 : 8
      gradings_score = course.assignments.joins(:submissions).where.not('submissions.score': nil).none? ? 0 : 8
      grading_standard_score = !course.grading_standard ? 0 : 8
      wiki_pages_score = course.wiki_pages.count * 8
      attachments_score = course.attachments.count * 8
      context_modules_score = course.context_modules.count * 8
      quizzes_score = course.quizzes.count * 8
      assignments_score = course.assignments.count * 6

      activity = syllabus_score + 
                 home_page_score + 
                 announcements_score + 
                 groups_score + 
                 peer_reviews_score + 
                 discussion_topics_score + 
                 gradings_score + 
                 grading_standard_score +
                 wiki_pages_score +
                 attachments_score +
                 context_modules_score +
                 quizzes_score +
                 assignments_score

      CourseConstructionActivity.create(course: course, course_name: course.name, teacher_name: course.teachers.map(&:name).join('、'), activity: activity)
    end
  end

  desc '以课程为单位的最近30天课程访问统计'
  task :course_visits => [:environment, 'activities:duration', 'activities:super_admin'] do
    CourseActivity.delete_all
    epsilon = 0.00001
    Course.where(workflow_state: 'available').find_each do |course|
      assignments = course.assignments.count + epsilon
      submissions = Submission.where(assignment: course.assignments).count
      quizzes = course.quizzes.count + epsilon
      quiz_submissions = Quizzes::QuizSubmission.where(quiz: course.quizzes).count
      discussion_topics = course.discussion_topics.count + epsilon
      discussion_participants = DiscussionTopicParticipant.where(discussion_topic: course.discussion_topics).count
      students = course.student_enrollments.count + epsilon
      activity = (submissions / assignments + quiz_submissions / quizzes + discussion_participants / discussion_topics) / students
      CourseActivity.create(course: course, course_name: course.name, activity: activity * 100)
    end
  end

  desc '统计一切'
  task :all => %w[
    activities:page_views
    activities:colleges 
    activities:course_constructions 
    activities:course_visits
  ]
end
