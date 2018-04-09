module Api
  class FeedEntriesController < ApplicationController
    before_action :set_feed_entry, only: [:update]

    def index
      render json: FeedEntry.unread
    end

    def update
      if @feed_entry.update(feed_entry_params)
        render json: @feed_entry
      else
        render nothing: true, status: :unprocessable_entity
      end

    end

    private
    def set_feed_entry
      @feed_entry = FeedEntry.find(params[:id])
    end

    def feed_entry_params
      params.require(:feed_entry).permit(:read)
    end

  end

end
