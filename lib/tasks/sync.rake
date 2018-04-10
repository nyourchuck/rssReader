namespace :sync do
  task feeds: [:environment] do
    Feed.sync_all
  end
end
