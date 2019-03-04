class CreateCourseRecommendations < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :course_recommendations do |t|
      t.belongs_to :course
      t.timestamps
    end
  end
end
