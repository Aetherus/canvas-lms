class CreatePlatformAdmins < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :platform_admins do |t|
      t.string :username, null: false
      t.string :password_digest

      t.index :username, unique: true
    end
  end
end
