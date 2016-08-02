class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false, unique: true
      t.string :categor
      t.string :location, null: false
      t.string :description
      t.integer :creator_id, null: false
      t.timestamps null: false
    end

    add_index :groups, :title
    add_index :groups, :location
  end
end
