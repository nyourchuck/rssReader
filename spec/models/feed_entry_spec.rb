require 'rails_helper'

RSpec.describe FeedEntry, type: :model do
  describe "default scope" do
    it "sorts by reverse published date" do
      FactoryBot.create(:feed_entry, title: :first, published: 2.hours.ago)
      FactoryBot.create(:feed_entry, title: :second, published: Time.now)
      FactoryBot.create(:feed_entry, title: :third, published: 2.days.ago)

      expect(FeedEntry.first.title).to eq 'second'
    end
  end
end
