Given(/^I am on the homepage$/) do
  visit root_path
end

Given(/^I am on Manage Feeds$/) do
  visit root_path
  first('button', text: 'Manage Feeds').click
end

Given(/^base data exists$/) do
  FactoryBot.create(:feed_entry, summary: 'Summary1', title: 'Title1')
  FactoryBot.create(:feed_entry, summary: 'Summary2', title: 'Title2')
  FactoryBot.create(:feed, title: 'Feed1', url: 'example.com')
end

Given(/^a feed exists$/) do
  FactoryBot.create(:feed, title: 'Feed1', url: 'example.com')
end

Given(/^a FeedEntry titled '(.*)' exists$/) do |title|
  FactoryBot.create(:feed_entry, title: title)
end

When(/^I click '(.+)'$/) do |selector|
  first(selector).click
end

When(/^I click button named '(.+)'$/) do |selector|
  first('button', text: selector ).click
end

When(/^I count (\w+) records$/) do |model_name|
  @count = model_name.constantize.count
end

When(/^I add a Feed titled '(.+)'$/) do |title|
  form = find :xpath, "//*[@id='newFeedForm']"
  form.find(:xpath, ".//input[@name='title']").set(title)
  form.find(:xpath, ".//input[@name='url']").set("example.com")
  form.find(:xpath, ".//input[@name='description']").set("#{title} description")
end

When(/^I change Feed title to '(.+)'$/) do |title|
  form = find :xpath, "//*[@class='editFeedEntryForm']"
  form.find(:xpath, ".//input[@name='title']").set(title)
end

Then(/^I should see the content (\w+)$/) do |title|
  expect(page).to have_content(title)
end

Then(/^I should not see the content (\w+)$/) do |title|
  expect(page).to_not have_content(title)
end

Then(/^I expect a Feed titled '(.+)'$/) do |title|
  expect(Feed.find_by_title(title)).to be
end

Then(/^FeedEntry titled '(.*)' should be read$/) do |title|
  expect(FeedEntry.find_by_title(title)).to be_read
end

Then(/^I expect (\d+) less (\w+)$/) do |change, model_name|
  @new_count = model_name.constantize.count
  expect(@count - @new_count).to eq change.to_i
end

