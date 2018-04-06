module Api
  class FeedsController < ApplicationController
    def index
      render json: Feed.all
    end

    def create
      feed = Feed.new(feed_params)
      if feed.save
        render json: feed
      else
        render nothing: true, status: :bad_request
      end
    end

    private

    def feed_params
      params.require(:feed).permit(:url, :description, :title)
    end

  end

end
