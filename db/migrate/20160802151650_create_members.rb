class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.timestamps null: false
    end

    add_index :members, :user_id
    add_index :members, :group_id
  end
end
