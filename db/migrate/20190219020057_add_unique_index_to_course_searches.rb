class AddUniqueIndexToCourseSearches < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    remove_index :course_searches, :course_id
    add_index :course_searches, :course_id, unique: true
  end
end
