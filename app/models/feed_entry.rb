class FeedEntry < ApplicationRecord
  belongs_to :feed

  default_scope { order(published: :desc) }
end
