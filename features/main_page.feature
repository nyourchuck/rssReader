Feature: RSS Reader Article View

@javascript
Scenario: Main page shows title
  Given base data exists
  Given I am on the homepage
  Then I should see the content Title1

@javascript
Scenario: Main page does not show summary 
  Given base data exists
  Given I am on the homepage
  Then I should not see the content Summary1

@javascript
Scenario: Expanding an article shows summary
  Given base data exists
  Given I am on the homepage
  When I click '.feedEntryActions .fa-plus-square-o'
  Then I should see the content Summary1

@javascript
Scenario: Marking an article as read
  Given a FeedEntry titled 'Test Article' exists
  Given I am on the homepage
  When I click '.feedEntryActions .fa-check'
  Then FeedEntry titled 'Test Article' should be read

@javascript
Scenario: Expanding and then hiding article hides summary
  Given base data exists
  Given I am on the homepage
  When I click '.feedEntryActions .fa-plus-square-o'
  When I click '.feedEntryActions .fa-minus-square-o'
  Then I should not see the content Summary1

@javascript
Scenario: Main page does not show rss feeds 
  Given base data exists
  Given I am on the homepage
  Then I should not see the content Feed1
