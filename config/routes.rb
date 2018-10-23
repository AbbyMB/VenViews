Rails.application.routes.draw do
  root 'venues#index'
  devise_for :users

  resources :venues, only: [:index, :show] do
    resources :reviews, only: [:new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :venues, only: [ :index, :show ] do
        resources :reviews, only: [:new, :create, :index]
      end
    end
  end
end
