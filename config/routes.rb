Rails.application.routes.draw do
  namespace :api do
    resources :feed_entries
    resources :feeds
  end
  root 'dashboard#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
