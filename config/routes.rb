Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, except: [:destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :groups, except: [:new]
    resources :memberships, only: [:index, :create, :destroy]
    resources :rsvps, only: [:index, :create, :destroy]
    resources :events, except: [:new]
  end

  root "static_pages#root"

end
