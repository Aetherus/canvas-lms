class CreateCollegeActivities < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :college_activities do |t|
      t.belongs_to :account, foreign_key: {dependent: :delete}, index: true
      t.string :account_name
      t.float :activity, null: false, default: 0.0

      t.timestamps
    end
  end
end
