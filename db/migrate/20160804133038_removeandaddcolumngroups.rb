class Removeandaddcolumngroups < ActiveRecord::Migration
  def change

    remove_column :groups, :categor, :string
    add_column :groups, :category, :string
  end
end
