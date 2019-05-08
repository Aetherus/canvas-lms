class CreatePerCourseContributions < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :per_course_contributions, id: false do |t|
      t.belongs_to :course, foreign_key: {on_delete: :cascade}
      t.integer :contributions

      t.timestamps
    end

    add_index :per_course_contributions, :contributions
  end
end
