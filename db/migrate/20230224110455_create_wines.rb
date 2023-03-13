class CreateWines < ActiveRecord::Migration[7.0]
  def change
    create_table :wines do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.string :grape, null: false
      t.string :region, null: false
      t.string :country, null: false
      t.float :price, null: false
      t.integer :year, null: false
      t.string :image, null: false
      t.string :winery, null: false
      t.integer :bold, null: false
      t.integer :tannic, null: false
      t.integer :sweet, null: false
      t.integer :acidic, null: false

      t.timestamps
    end
  end
end
