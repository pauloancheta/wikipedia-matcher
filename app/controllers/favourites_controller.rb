class FavouritesController < ApplicationController
  def create
    favourite = Favourite.new(title: params[:title], 
                              snippet: params[:snippet],
                              link: params[:link]
                              )
    favourite.save!
    render nothing: true
  end

  def destroy
    favourite = Favourite.where(title: params[:title]).first
    favourite.destroy!
    render nothing: true
  end
end