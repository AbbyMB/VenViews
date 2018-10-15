Rails.application.routes.draw do
  root 'venues#index'
  devise_for :users

  resources :venues, only: [:index]
end
