# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cards= Card.create [
  {front: 'Ruby',      back: 'A Precious Stone'},
  {front: 'Rails',     back: 'Something to hold on to when on the stairs'},
  {front: 'Sinatra',   back: 'A singer a little before my time'},
  {front: 'Java',      back: 'A cup of coffee'},
  {front: 'Web',       back: 'Something Charelette Wove'}

]
