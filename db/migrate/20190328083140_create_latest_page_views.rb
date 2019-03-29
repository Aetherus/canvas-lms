class CreateLatestPageViews < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :latest_page_views, id: false do |t|
      t.integer :activity
    end
  end
end
