class AddFeedEntryDefaultReadValue < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:feed_entries, :read, false)
  end
end
