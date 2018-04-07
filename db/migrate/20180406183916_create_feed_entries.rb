class CreateFeedEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :feed_entries do |t|
      t.integer :feed_id
      t.string :title
      t.datetime :published
      t.text :summary
      t.string :url
      t.string :author
      t.boolean :read

      t.timestamps
    end
  end
end
