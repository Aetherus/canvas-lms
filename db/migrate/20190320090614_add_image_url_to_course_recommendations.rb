class AddImageUrlToCourseRecommendations < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    add_column :course_recommendations, :image_url, :text
  end
end
