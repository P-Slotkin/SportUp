class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.string :description
      t.string :location, null: false
      t.timestamps null: false
    end

    add_index :events, :creator_id
    add_index :events, :location
  end
end
