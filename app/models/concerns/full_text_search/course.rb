module FullTextSearch
  module Course
    extend ActiveSupport::Concern

    included do
      after_save :upsert_course_search

      def upsert_course_search
        content = "#{name},#{teachers.map(&:name).join(',')}"
        ActiveRecord::Base.connection.execute <<-SQL
          insert into course_searches (course_id, content) values (
            #{id}, 
            to_tsvector('jiebaqry', '#{content}')
          )
          on conflict (course_id) do
          update set content = to_tsvector('jiebaqry', '#{content}')
        SQL
      end
    end
  end
end
