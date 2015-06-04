Rails.application.routes.draw do
  root 'home#index'
  resources :favourites, only: [:create]
  delete '/remove_favourite/:title' => 'favourites#destroy'
end
