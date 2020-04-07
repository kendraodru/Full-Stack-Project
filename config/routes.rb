Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :products, only: [:index, :show]
    # resources :carts, only: [:create, :show]
    # resources :carts, only: [:show]
    resources :cart_items, only: [:create, :index, :destroy, :update]
    # user may want to increase or decrease the quantity
    resource :session, only: [:create, :destroy] 
    
    
    resources :carts, only: [:show, :update] do
      resources :products, only: [:index]
    end 

    resources :users, only: [:create] do
      resources :carts, only: [:create]
    end


    
  end
end


