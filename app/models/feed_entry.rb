class FeedEntry < ApplicationRecord
  belongs_to :feed

  default_scope { order(published: :desc) }
  scope :unread, ->{ where(read: false) }
end
