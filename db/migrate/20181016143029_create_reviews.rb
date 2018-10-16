class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.string :description
      t.integer :vote_count, null: false
      t.belongs_to :user
      t.belongs_to :venue

      t.timestamps null: false
    end
  end
end
