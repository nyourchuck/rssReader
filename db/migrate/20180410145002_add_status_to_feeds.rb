class AddStatusToFeeds < ActiveRecord::Migration[5.1]
  def change
    add_column :feeds, :status, :string
    add_column :feeds, :status_details, :string
  end
end
