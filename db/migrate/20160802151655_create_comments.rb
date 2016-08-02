class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :body
      t.integer :event_id, null: false
      t.timestamps null: false
    end

    add_index :comments, :author_id
    add_index :comments, :event_id
  end
end
