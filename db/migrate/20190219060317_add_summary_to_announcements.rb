class AddSummaryToAnnouncements < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    change_table :announcements do |t|
      t.text :summary
    end
  end
end
