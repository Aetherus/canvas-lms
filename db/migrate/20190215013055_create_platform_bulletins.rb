class CreatePlatformBulletins < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :platform_bulletins do |t|
      t.string :picture_url
      t.string :title, null: false
      t.text :platform_details
      t.string :read_more
      t.string :activity

      t.timestamps
    end
  end
end
