namespace :analytics do
  task :current_term => :environment do
    now = Time.now
    $current_term = EnrollmentTerm.where('start_at < ?', now).where('end_at > ?', now).order(:start_at).first
  end

  desc 'Per-college course open rates in current term'
  task :per_college_course_open_rates => [:environment, 'analytics:current_term'] do
    next unless $current_term
    PerCollegeCourseOpenRate.delete_all
    courses_counts_by_college_id = $current_term.courses.group(:account_id).count.each_with_object(Hash.new(0)) do |(account_id, count), hash|
      college_id = AccountHierarchy.where(descendant_id: account_id).order(generations: :desc).second&.ancestor_id
      hash[college_id] += count
    end

    available_courses_counts_by_college_id = $current_term.courses.where(workflow_state: 'available').group(:account_id).count.each_with_object(Hash.new(0)) do |(account_id, count), hash|
      college_id = AccountHierarchy.where(descendant_id: account_id).order(generations: :desc).second&.ancestor_id
      hash[college_id] += count
    end

    courses_counts_by_college_id.each do |college_id, courses_count|
      available_courses_count = available_courses_counts_by_college_id[college_id]
      PerCollegeCourseOpenRate.create(account_id: college_id, courses_count: courses_count, available_courses_count: available_courses_count)
    end
  end

  desc 'Per-course contributions in current term'
  task :per_course_contributions => [:environment, 'analytics:current_term'] do
    next unless $current_term
    PerCourseContribution.delete_all
    $current_term.courses.where(workflow_state: 'available').each do |course|
      wiki_pages = course.wiki_pages.count
      attachments = course.attachments.count
      modules = course.context_modules.count
      quizzes = course.quizzes.count
      assignments = course.assignments.count
      PerCourseContribution.create(course_id: course.id, contributions: wiki_pages + attachments + modules + quizzes + assignments)
    end
  end

  desc 'Per-course interactions in current term'
  task :per_course_interactions => [:environment, 'analytics:current_term'] do
    next unless $current_term
    PerCourseInteraction.delete_all
    $current_term.courses.where(workflow_state: 'available').each do |course|
      assignment_submissions = Submission.where(assignment: course.assignments).count
      quiz_submissions = Quizzes::QuizSubmission.where(quiz: course.quizzes).count
      discussion_participants = DiscussionTopicParticipant.where(discussion_topic: course.discussion_topics).count
      PerCourseInteraction.create(course_id: course.id, interactions: assignment_submissions + quiz_submissions + discussion_participants)
    end
  end


  desc '统计一切'
  task :all => %w[
    analytics:per_college_course_open_rates
    analytics:per_course_contributions
    analytics:per_course_interactions
  ]
end
