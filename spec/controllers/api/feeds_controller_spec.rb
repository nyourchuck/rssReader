require 'rails_helper'

RSpec.describe Api::FeedsController, type: :controller do
  let(:feed) { FactoryBot.build(:feed, title: 'AA', url: 'example.com') }
  let(:parsed_response) { parse_json(response.body) }
  let(:feed_params) {{ title: 'updated_title', url: 'example.com', description: 'ZZ'}}
  let(:invalid_feed_params) {{ invalid_attribute: 'X' }}

  describe "GET #index" do
    before(:each) do
      allow(Feed).to receive(:all).and_return([feed])
        
    end

    it "returns @feeds" do
      get :index, { }
      expect(parsed_response.first[:title]).to eq 'AA'
    end
  end

  describe "POST #create" do
      
    it "creates new record" do
      expect{
        post :create, params: { feed: feed_params }
      }.to change(Feed, :count).by(1)
    end 

    it "returns an error when save fails" do
      allow_any_instance_of(Feed).to receive(:save).and_return(false)

      post :create, params: { feed: feed_params }
      expect(response.status).to eq 400
    end 
  end

  describe "PUT #update" do
      
    before(:each) do
      feed.save!
    end

    it "updates record" do
      put :update, params: { id: feed.id, feed: feed_params }
      expect(feed.reload.title).to eq 'updated_title'
    end 

    it "returns updated record" do
      put :update, params: { id: feed.id, feed: feed_params }
      expect(parsed_response[:title]).to eq 'updated_title'
    end 

    it "returns an error when update fails" do
      allow_any_instance_of(Feed).to receive(:update).and_return(false)

      put :update, params: { id: feed.id, feed: feed_params }
      expect(response.status).to eq 422
    end 
  end

  describe "DELETE #destroy" do

    it "removes record" do
      feed.save!
      expect {
        delete :destroy, params: {id: feed.id }
      }.to change(Feed, :count).by(-1)
    end
  end
end
