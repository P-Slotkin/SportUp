class AddMembersToGroup < ActiveRecord::Migration
  # actually changing members table to memberships
  def change
    rename_table :members, :memberships
  end
end
