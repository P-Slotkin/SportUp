class RemovePictureColumns < ActiveRecord::Migration
  def change
    remove_column :groups, :picture, :string
    remove_column :users, :picture, :string
  end
end
