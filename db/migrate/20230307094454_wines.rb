class Wines < ActiveRecord::Migration[7.0]
  def change
    remove_column :wines, :type
    add_column :wines, :wine_type, :string
  end
end
