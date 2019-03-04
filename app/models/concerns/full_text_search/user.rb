module FullTextSearch
  module User
    extend ActiveSupport::Concern

    included do
      after_update :upsert_course_searches

      def upsert_course_searches
        teacher_enrollments.each(&:upsert_course_search)
      end
    end
  end
end
