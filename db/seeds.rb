# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(first_name:"Kim", last_name:"Tsui", 
email:"kim234@gmail.com", password: "password")
user2 = User.create(first_name:"Jonothan", last_name:"Smith", 
email:"jonjon@yahoo.com", password: "password")
user3 = User.create(first_name:"Ryan", last_name:"Leung", 
email:"ryry@gmail.com", password: "password")
user4 = User.create(first_name:"Vincent", last_name:"Tsui", 
email:"vince@gmail.com", password: "password")
