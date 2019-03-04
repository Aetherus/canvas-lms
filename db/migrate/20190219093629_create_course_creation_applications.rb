class CreateCourseCreationApplications < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :course_creation_applications do |t|
      t.string :teacher_name, null: false
      t.string :course_name, null: false
      t.string :account_name, null: false
      t.string :email, null: false
      t.string :telephone
      t.string :state, null: false, default: '未审核'

      t.timestamps
    end
  end
end
