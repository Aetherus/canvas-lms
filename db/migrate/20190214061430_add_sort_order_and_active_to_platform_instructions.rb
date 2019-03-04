class AddSortOrderAndActiveToPlatformInstructions < ActiveRecord::Migration[5.1]
  tag :postdeploy
  
  def change
    change_table :platform_introductions do |t|
      t.integer :sort_order
      t.boolean :active, default: true, null: false
    end
  end
end
