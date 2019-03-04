class DropTriggersForFullTextSearch < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    execute <<-SQL
      drop trigger re_searchablize_course on enrollments;
      drop function teacher_to_tsvector_for_course();
      drop trigger searchablize_course on courses;
      drop function course_to_tsvector();
    SQL
  end
end
