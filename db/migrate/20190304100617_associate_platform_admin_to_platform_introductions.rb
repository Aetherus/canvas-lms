class AssociatePlatformAdminToPlatformIntroductions < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    remove_column :platform_introductions, :created_by
    
    change_table :platform_introductions do |t|
      t.belongs_to :platform_admin, foreign_key: true, index: true, null: true
    end
  end
end
