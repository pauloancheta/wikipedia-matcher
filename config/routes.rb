Rails.application.routes.draw do
  root 'home#index'
  resources :favourites, only: [:index, :create, :destroy]
end
