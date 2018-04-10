Feature: RSS Reader Manage Feeds

@javascript
Scenario: Manage Feeds shows rss feeds
  Given base data exists
  Given I am on the homepage
  When I click button named 'Manage Feeds'
  Then I should see the content Feed1

@javascript
Scenario: Manage Feeds lets you delete a feed
  Given base data exists
  When I am on Manage Feeds
  When I count Feed records
  When I click '.fa-trash'
  Then I expect 1 less Feed 

@javascript
Scenario: Manage Feeds lets you add a feed
  When I am on Manage Feeds
  When I add a Feed titled 'Testing1'
  When I click button named 'Add Feed'
  Then I expect a Feed titled 'Testing1'

@javascript
Scenario: Manage Feeds lets you edit a feed
  Given a feed exists
  When I am on Manage Feeds
  When I click '.fa-edit'
  When I change Feed title to 'Testing Edit'
  When I click button named 'Save'
  Then I expect a Feed titled 'Testing Edit'

