class HomeController < ApplicationController
  def index
    @favourites = Favourite.all
  end
end