require 'rails_helper'

RSpec.describe Api::FeedEntriesController, type: :controller do
  let(:feed_entry) { FactoryBot.create(:feed_entry, title: "AA") }
  let(:feed_entry2) { FactoryBot.build(:feed_entry, title: "BB") }
  let(:parsed_response) { parse_json(response.body) }
  let(:feed_entry_params) {{ read: 'true' }}

  describe "GET #index" do
    before(:each) do
      feed_entry.save!  
    end

    it "returns @feeds" do
      get :index, { }
      expect(parsed_response.first[:title]).to eq 'AA'
    end
  end

  describe "PUT #update" do
      
    before(:each) do
      feed_entry.save!
    end

    it "updates record" do
      expect(feed_entry.reload.read).to_not be
      put :update, params: { id: feed_entry.id, feed_entry: feed_entry_params }
      expect(feed_entry.reload.read).to be
    end 

    it "returns updated record" do
      put :update, params: { id: feed_entry.id, feed_entry: feed_entry_params }
      expect(parsed_response[:title]).to eq 'AA'
    end 

    it "returns an error when update fails" do
      allow_any_instance_of(FeedEntry).to receive(:update).and_return(false)

      put :update, params: { id: feed_entry.id, feed_entry: feed_entry_params }
      expect(response.status).to eq 422
    end 
  end

end
