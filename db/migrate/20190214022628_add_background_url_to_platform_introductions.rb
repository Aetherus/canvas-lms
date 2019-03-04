class AddBackgroundUrlToPlatformIntroductions < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    change_table :platform_introductions do |t|
      t.string :background_image_url
    end
  end
end
