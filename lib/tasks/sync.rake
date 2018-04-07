namespace :sync do
  task feeds: [:environment] do
    Feed.all.each do |feed|
      puts "Syncing: #{feed.url} (#{feed.title})"
      feed.sync
    end
  end
end
