# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cards= Card.create [
  {front: 'First Card Front', back: 'First Card Back'},
  {front: '2nd Card Front',   back: '2nd Card Back'},
  {front: '3rd Card Front',   back: '3rd Card Back'},
]
