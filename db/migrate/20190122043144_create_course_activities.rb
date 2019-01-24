class CreateCourseActivities < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :course_activities do |t|
      t.belongs_to :course, foreign_key: {dependent: :delete}
      t.string :course_name
      t.float :activity

      t.timestamps
    end
  end
end
