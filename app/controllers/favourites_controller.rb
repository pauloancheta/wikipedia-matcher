class FavouritesController < ApplicationController
  def index
    @favourite = Favourite.all
  end

  def create
    favourite = Favourite.new(title: params[:title])
    favourite.save!
    render nothing: true
  end

  def destroy
    favourite = Favourite.find(title: params[:title])
    favourite.destroy!
    render nothing: true
  end
end