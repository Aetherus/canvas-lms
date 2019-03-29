class RemoveImagePathFromCourseRecommendations < ActiveRecord::Migration[5.1]
  tag :postdeploy
  
  def change
    remove_column :course_recommendations, :image_path
  end
end
