class CreateConversionFailures < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    create_table :conversion_failures do |t|
      t.belongs_to :attachment, foreign_key: {on_delete: :cascade}
      t.string :conversion_type

      t.timestamps
    end
  end
end
