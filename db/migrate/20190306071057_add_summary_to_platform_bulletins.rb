class AddSummaryToPlatformBulletins < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    add_column :platform_bulletins, :summary, :text
  end
end
