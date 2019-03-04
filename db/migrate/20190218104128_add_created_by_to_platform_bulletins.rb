class AddCreatedByToPlatformBulletins < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    change_table :platform_bulletins do |t|
      t.string :created_by
    end
  end
end
