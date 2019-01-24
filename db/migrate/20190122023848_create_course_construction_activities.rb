class CreateCourseConstructionActivities < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :course_construction_activities do |t|
      t.belongs_to :course, foreign_key: {dependent: :delete}
      t.float :activity
      t.string :course_name
      t.string :teacher_name

      t.timestamps
    end
  end
end
