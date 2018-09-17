class AddHandledToConversionFailures < ActiveRecord::Migration[5.1]
  tag :postdeploy

  def change
    add_column :conversion_failures, :handled, :boolean, default: false
  end
end
