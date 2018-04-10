class Feed < ApplicationRecord
  has_many :feed_entries, dependent: :destroy

  def sync
    content = Feedjira::Feed.fetch_and_parse url
    content.entries.each do |entry|
      local_entry = feed_entries.where(title: entry.title).first_or_initialize
      author = ActionController::Base.helpers.strip_links entry.author
      local_entry.update_attributes(summary: entry.summary, author: author, url: entry.url, published: entry.published)
    end
  end

  def self.sync_all
    Feed.all.each do |feed|
      Rails.logger.info "Syncing: #{feed.url} (#{feed.title})"
      begin
        feed.sync
        feed.update_attributes(
          status: :success,
          status_details: "Synced at #{Time.now}"
        )
      rescue StandardError => error
        feed.update_attributes(
          status: :error,
          status_details: "#{error.message} at #{Time.now}"
        )
      end
    end
  end    
end
