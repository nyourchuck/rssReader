class Feed < ApplicationRecord
  has_many :feed_entries, dependent: :destroy

  def sync
    content = Feedjira::Feed.fetch_and_parse url
    content.entries.each do |entry|
      local_entry = feed_entries.where(title: entry.title).first_or_initialize
      local_entry.update_attributes(summary: entry.summary, author: entry.author, url: entry.url, published: entry.published)
    end
  end
end
