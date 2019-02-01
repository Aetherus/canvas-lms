class CreateCourseSearches < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    # 在跑这个migration之前，请确保PostgreSQL安装了pg_jieba插件。
    

    create_table :course_searches, comment: '课程模糊查询辅助表' do |t|
      t.belongs_to :course, foreign_key: true
    end

    change_table :course_searches do |t|
      t.tsvector :content
      t.index :content, using: :gin
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
					create function course_to_tsvector() returns trigger as $$
      			declare
        			teacher_names text;
      			begin
							select string_agg(users.name, ',') into teacher_names from users inner join enrollments on enrollments.type = 'TeacherEnrollment' and enrollments.course_id = new.id;
              new.content := to_tsvector('jiebaqry', new.name || ',' || teacher_names);
        			return new;
      			end
    			$$ language plpgsql;
        SQL
      end

      dir.down do
			  execute <<-SQL
				  drop function course_to_tsvector();
			  SQL
      end
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
          create trigger searchablize_course
          after insert or update of name on courses
          for each row execute procedure course_to_tsvector();
        SQL
      end

      dir.down do
        execute <<-SQL
          drop trigger searchablize_course on courses;
        SQL
      end
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
					create function teacher_to_tsvector_for_course() returns trigger as $$
      			declare
        			teacher_names text;
      			begin
              if new.type = 'TeacherEnrollment' then
							  select string_agg(users.name, ',') into teacher_names from users inner join enrollments on enrollments.type = 'TeacherEnrollment' and enrollments.course_id = new.course_id;
              end if;
              update courses set content = to_tsvector('jiebaqry', name || ',' || teacher_names);
        			return new;
      			end
    			$$ language plpgsql;
        SQL
      end

      dir.down do
        execute <<-SQL
          drop function teacher_to_tsvector_for_course();
        SQL
      end
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
          create trigger re_searchablize_course
          after insert on enrollments
          for each row execute procedure teacher_to_tsvector_for_course();
        SQL
      end

      dir.down do
        execute <<-SQL
          drop trigger re_searchablize_course on enrollments;
        SQL
      end
    end
  end
end
