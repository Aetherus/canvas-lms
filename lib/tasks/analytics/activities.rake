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

  desc '以院系为单位的最近30天活跃度统计'
  task :colleges => [:environment, 'activities:super_admin', 'activities:top_account', 'activities:duration'] do
    CollegeActivity.delete_all
    Account.where(parent_account: $top_account).find_each do |account|
      course_ids = Course.where(account_id: account.self_and_descendant_ids).pluck(:id)
        
      visits = EnrollmentTerm.all
        .flat_map {|term| Analytics::Department.new($super_admin, account, term, nil).participation_by_date}
        .select{|participation| participation['date'].between?($from, $to)}
        .sum{|participation| participation['views']}
        .tap{|sum| puts 'visits', sum}

      courses_criteria = course_ids.size.to_r
      courses_count = WikiPage.where(context_type: 'Course', context_id: course_ids).pluck(:context_id).uniq.count
      students_count = StudentEnrollment.where(course_id: course_ids).count.to_r
      activity = ((courses_count * courses_count * visits) / (courses_criteria * students_count)).to_f rescue 0.0
      CollegeActivity.create(account_id: account.id, account_name: account.name, activity: activity)
    end
  end

  desc '以课程为单位的最近30天课程建设统计'
  task :course_constructions => [:environment, 'activities:duration'] do
    CourseConstructionActivity.delete_all
    Course.find_each do |course|
      activity = course.teachers.map do |teacher|
        wiki_pages = WikiPage.where(context: course, created_at: $duration).count + WikiPage.where(context: course.context_modules, created_at: $duration).count
        attachments = Attachment.where(context: course, created_at: $duration).count +
                      Attachment.where(context: course.context_modules, created_at: $duration).count +
                      Attachment.where(context: course.assignments, created_at: $duration).count +
                      Attachment.where(context: Assignment.where(context: course.context_modules), created_at: $duration).count
        context_modules = course.context_modules.where(created_at: $duration).count
        quizzes = course.quizzes.where(created_at: $duration).count + Quizzes::Quiz.where(context: course.context_modules, created_at: $duration).count
        assignments = course.assignments.where(created_at: $duration).count + Assignment.where(context: course.context_modules, created_at: $duration).count
        wiki_pages + attachments + quizzes + assignments
      end.sum
      CourseConstructionActivity.create(course: course, course_name: course.name, teacher_name: course.teachers.map(&:name).join('、'), activity: activity)
    end
  end

  desc '以课程为单位的最近30天课程访问统计'
  task :course_visits => [:environment, 'activities:duration', 'activities:super_admin'] do
    CourseActivity.delete_all
    Course.find_each do |course|
      visits = Analytics::Course.new($super_admin, course).participation
        .select{|participation| participation['date'].between?($from, $to)}
        .sum{|participation| participation['views'] + participation['participations']}
      CourseActivity.create(course: course, course_name: course.name, activity: visits)
    end
  end

  desc '统计一切'
  task :all => %w[
    activities:colleges 
    activities:course_constructions 
    activities:course_visits
  ]
end
