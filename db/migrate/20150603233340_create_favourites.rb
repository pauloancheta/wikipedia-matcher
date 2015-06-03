class CreateFavourites < ActiveRecord::Migration
  def change
    create_table :favourites do |t|
      t.string :title

      t.timestamps null: false
    end
  end
end
