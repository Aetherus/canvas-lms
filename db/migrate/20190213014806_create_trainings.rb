class CreateTrainings < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :trainings do |t|
      t.string :title, null: false
      t.text :content
      t.string :image_url
      t.string :tutor_name

      t.timestamps
    end
  end
end
