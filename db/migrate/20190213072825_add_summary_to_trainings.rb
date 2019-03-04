class AddSummaryToTrainings < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    change_table :trainings do |t|
      t.text :summary
    end
  end
end
