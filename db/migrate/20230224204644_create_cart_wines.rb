class CreateCartWines < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_wines do |t|
      t.integer :quantity, null: false
      t.references :user, null: false, foreign_key: true
      t.references :wine, null: false, foreign_key: true

      t.timestamps
    end

  end
end
