class AddDateEvent < ActiveRecord::Migration
  def change
    add_column :events, :date, :datetime, null:false
  end
end
