module Api
  class FeedsController < ApplicationController
    before_action :set_feed, only: [:update, :destroy]

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

    def update
      if @feed.update(feed_params)
        render json: @feed
      else
        render nothing: true, status: :unprocessable_entity
      end
    end

    def destroy
      @feed.destroy
      head :no_content
    end


    private
    def set_feed
      @feed = Feed.find(params[:id])
    end


    def feed_params
      params.require(:feed).permit(:url, :description, :title)
    end

  end

end
