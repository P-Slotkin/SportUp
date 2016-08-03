# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


users = User.create([ {name: 'Russell Carmen', email: 'russell@email.com', password:'starwars'},
  {name: 'Russell Carmen', email: 'russell@email.com', password:'starwars'},
  {name: 'Jeff Commander', email: 'jeff@email.com', password:'starwars'},
  {name: 'Aleshia Conkle', email: 'aleshia@email.com', password:'starwars'},
  {name: 'Ines Muro', email: 'ines@email.com', password:'starwars'},
  {name: 'Mafalda Mckenna', email: 'mafalda@email.com', password:'starwars'},
  {name: 'Nicolette Potvin', email: 'nicolette@email.com', password:'starwars'},
  {name: 'Nicholas Tindell', email: 'nicholas@email.com', password:'starwars'},
  {name: 'Antionette Singer', email: 'antoinette@email.com', password:'starwars'}])
