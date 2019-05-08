class DropXxxActivitiesAndLatestPageViews < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    #drop_table :course_activities
    #drop_table :course_construction_activities
    #drop_table :college_activities
    #drop_table :latest_page_views
  end
end
