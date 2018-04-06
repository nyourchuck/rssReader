# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Feed.create(
  title: "Hacker News",
  url: "https://hnrss.org/frontpage",
  description: "Hacker News RSS"
)

Feed.create(
  title: "Reuters Pictures",
  url: "http://feeds.reuters.com/ReutersPictures",
  description:"Reuters Pictures"
)

Feed.create(
  title: "Cooking for Engineers",
  url: "http://www.cookingforengineers.com/atom.xml",
  description: "Cooking for engineers"
)
