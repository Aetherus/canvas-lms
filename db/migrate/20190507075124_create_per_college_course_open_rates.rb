class CreatePerCollegeCourseOpenRates < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :per_college_course_open_rates, id: false do |t|
      t.belongs_to :account, foreign_key: {on_delete: :cascade}
      t.integer :courses_count
      t.integer :available_courses_count

      t.timestamps
    end
    add_index :per_college_course_open_rates, :courses_count
    add_index :per_college_course_open_rates, :available_courses_count
  end
end
