class CreatePlatformSettings < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :platform_settings do |t|
      t.string :name, null: false
      t.string :value

      t.index :name, unique: true
    end
  end
end
