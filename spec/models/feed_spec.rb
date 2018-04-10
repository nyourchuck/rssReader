require 'rails_helper'

RSpec.describe Feed, type: :model do
  subject { FactoryBot.build(:feed, title: 'AA', url: 'example.com') }
  let(:rss_item1) {
    double(title: 'A1', summary: 'test1', author: 'aa', url: 'uu', published: Time.now)
  } 
  let(:rss_item2) {
    double(title: 'A2', summary: 'test2', author: 'aa', url: 'uu', published: Time.now)
  } 

  describe "sync" do
    let(:entries) { [ rss_item1 ] }
    let(:rss) { double(entries: entries) }

    before(:each) do
      allow(Feedjira::Feed).to receive(:fetch_and_parse).and_return(rss)
    end 

    it "creates a new FeedEntry" do
      expect { subject.sync }.to change(Feed, :count).by(1)
    end

    describe "updates duplicate entries" do
      before(:each) do
        subject.save!
        subject.feed_entries.create!(title: 'A1', summary: 'original summary')
      end

      it "doesn't add new record" do
        expect { subject.sync }.to change(Feed, :count).by(0)
      end

      it "updates original record" do
        subject.sync
        expect(FeedEntry.last.summary).to eq 'test1' 
      end
    end

  end
end
