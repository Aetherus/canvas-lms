class CreatePerCourseInteractions < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :per_course_interactions, id: false do |t|
      t.belongs_to :course, foreign_key: {on_delete: :cascade}
      t.integer :interactions

      t.timestamps
    end
    add_index :per_course_interactions, :interactions
  end
end
