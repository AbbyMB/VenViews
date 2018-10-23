class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :description, null: false
      t.integer :capacity, null: false
      t.string :url, null: false
      t.string :image, null: false

      t.timestamps null: false
    end
  end
end
