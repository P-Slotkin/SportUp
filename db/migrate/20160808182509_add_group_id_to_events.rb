class AddGroupIdToEvents < ActiveRecord::Migration
  def change
    add_column :events, :group_id, :integer, null:false
  end
end
