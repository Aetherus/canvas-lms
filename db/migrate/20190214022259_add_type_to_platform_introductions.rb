class AddTypeToPlatformIntroductions < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    change_table :platform_introductions do |t|
      t.string :type
    end
  end
end
