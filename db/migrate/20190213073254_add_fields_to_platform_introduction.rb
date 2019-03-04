class AddFieldsToPlatformIntroduction < ActiveRecord::Migration[5.1]
  tag :postdeploy
  
  def change
    change_table :platform_introduction do |t|
      t.text :content
      t.string :type
      t.string :link
    end
  end
end
