module Api
  class FeedEntriesController < ApplicationController
    def index
      render json: FeedEntry.all
    end

  end

end
