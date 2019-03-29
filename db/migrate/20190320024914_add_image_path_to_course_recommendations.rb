class AddImagePathToCourseRecommendations < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    add_column :course_recommendations, :image_path, :string
  end
end
