namespace :activities do
  task :login do
    Bundler.require :analytics

    $cookies = RestClient.post('http://localhost:3000/login/canvas.json', {
      pseudonym_session: {
        unique_id: 'admin',
        password: '1q2w3e4r5t'
      }
    }).cookies
  end

  desc '以院系为单位的最近30天活跃度统计'
  task :colleges => [:environment, 'activities:login'] do
    begin
      from = 30.days.ago.beginning_of_day.strftime('%Y-%m-%d')
      to = Date.today.strftime('%Y-%m-%d')

      Account.where(parent_account_id: 1).find_each do |account|
        RestClient.get("http://localhost:3000/api/v1/accounts/#{account.id}/analytics/completed/activity", cookies: $cookies) do |resp|
          visits = JSON.parse(resp.body.split(';', 2).last)['by_date'].select{|k, v| k >= from && k < to}.map{|k, v| v}.sum
          course_ids = Course.where(account_id: account.self_and_descendant_ids).where('created_at >= ?', 30.days.ago).pluck(:id)
          courses_criteria = course_ids.size.to_r
          courses_count = WikiPage.where(context_type: 'Course', context_id: course_ids).pluck(:context_id).uniq.count
          students_count = StudentEnrollment.where(course_id: course_ids).count.to_r
          activity = ((courses_count * visits) / (courses_criteria * students_count + Float::EPSILON)).to_f
          CollegeActivity.create(account_id: account.id, account_name: account.name, activity: activity)
        end
      end
    rescue => e
      pp e
    end
  end

  desc '以课程为单位的最近30天课程建设统计'
  task :course_constructions => [:environment, 'activities:login'] do
    begin
      from = 30.days.ago.beginning_of_day.strftime('%Y-%m-%d')
      to = Date.today.strftime('%Y-%m-%d')

      Course.find_each do |course|
        activity = course.teachers.map do |teacher|
          RestClient.get("http://localhost:3000/api/v1/courses/#{course.id}/analytics/users/#{teacher.id}/activity", cookies: $cookies) do |resp|
            wiki_pages = WikiPage.where(context: course).count + WikiPage.where(context: course.context_modules).count
            attachments = Attachment.where(context: course).count +
                          Attachment.where(context: course.context_modules).count +
                          Attachment.where(context: course.assignments).count +
                          Attachment.where(context: Assignment.where(context: course.context_modules)).count
            context_modules = course.context_modules.count
            quizzes = course.quizzes.count + Quizzes::Quiz.where(context: course.context_modules).count
            visits = JSON.parse(resp.body.split(';', 2).last)['page_views'].select{|k, v| k >= from && k < to}.map{|k, v| v}.sum
            wiki_pages + attachments + quizzes + visits
          end
        end
        course.course_construction_activities.create(course_name: course.name, teacher_name: course.teachers.map(&:name).join('、'), activity: activity)
      end
    rescue => e
      pp e
    end
  end

  desc '以课程为单位的最近30天课程访问统计'
  task :course_visits => [:environment, 'activities:login'] do
    begin
      from = 30.days.ago.beginning_of_day.strftime('%Y-%m-%d')
      to = Date.today.strftime('%Y-%m-%d')

      Course.find_each do |course|
        RestClient.get("http://localhost:3000/api/v1/courses/#{course.id}/analytics/activity", cookies: $cookies) do |resp|
          visits = JSON.parse(resp.body.split(';', 2).last).select{|x| x['date'] >= from && x['date'] < to}.map{|x| x['views'] + x['participations']}.sum
          CourseActivity.create(course: course, course_name: course.name, activity: visits)
        end
      end
    rescue => e
      pp e
    end
  end

  desc '统计一切'
  task :all => %w[environment activities:login activities:colleges activities:course_constructions activities:course_visits]
end
