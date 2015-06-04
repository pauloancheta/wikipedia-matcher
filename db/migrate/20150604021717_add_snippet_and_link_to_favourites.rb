class AddSnippetAndLinkToFavourites < ActiveRecord::Migration
  def change
    add_column :favourites, :snippet, :string
    add_column :favourites, :link, :string
  end
end
