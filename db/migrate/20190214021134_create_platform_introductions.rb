class CreatePlatformIntroductions < ActiveRecord::Migration[5.1]
  tag :postdeploy
  
  def change
    create_table :platform_introductions do |t|
      t.string :title, null: false, comment: '标题'
      t.text :content, comment: '内容'
      t.text :summary, comment: '摘要'
      t.string :link, comment: '链接'
      t.string :created_by, comment: '创建人'

      t.timestamps
    end
  end
end
