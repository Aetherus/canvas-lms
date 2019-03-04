module FullTextSearch
  module TeacherEnrollment
    extend ActiveSupport::Concern

    included do
      after_save :upsert_course_search

      delegate :upsert_course_search, to: :course
    end
  end
end
