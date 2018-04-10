FactoryBot.define do
  factory :feed_entry do
    title "MyString"
    published "2018-04-06 13:39:16"
    summary "My Summary"
    url "MyString"
    author "MyString"
    read false
    association :feed, factory: :feed, strategy: :build
  end
end
