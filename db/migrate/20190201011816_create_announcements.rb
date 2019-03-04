class CreateAnnouncements < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :announcements do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
