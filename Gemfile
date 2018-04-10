source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.6'
gem 'sqlite3'
gem 'puma', '~> 3.7'

gem 'sass-rails', '~> 5.0'
gem 'bootstrap-sass', '~> 3.3.6'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'react-rails'

gem 'font-awesome-rails'
gem 'font-awesome-sass', '~> 4.2.0'
gem 'haml'
gem 'haml-rails'
gem 'html2haml'

gem 'jbuilder', '~> 2.5'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'feedjira'

group :development, :test do
  gem 'database_cleaner'
  gem 'rails-controller-testing'
  gem 'factory_bot_rails'
  gem 'ffaker'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'ruby-prof'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-mocks'
  gem 'rspec-rails'
  gem 'simplecov'
  gem 'simplecov-csv'
  gem 'simplecov-rcov'
  gem 'timecop'

  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'geckodriver-helper'
  gem 'cucumber-rails', require: false
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
