class CreateFoos < ActiveRecord::Migration[5.1]
  def change
    create_table :foos do |t|
      t.string :name
      t.integer :num
    end
  end
end
