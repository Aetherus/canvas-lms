class AddNameAndRoleToPlatformAdmins < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    change_table :platform_admins do |t|
      t.string :name
      t.string :role
    end
  end
end
