# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Membership.delete_all
User.delete_all
Group.delete_all


user1 = User.create({name: 'Russell Carmen', email: 'russell@email.com', password:'starwars'})
user2 = User.create({name: 'Jeff Commander', email: 'jeff@email.com', password:'starwars'})
user3 = User.create({name: 'Aleshia Conkle', email: 'aleshia@email.com', password:'starwars'})
user4 = User.create({name: 'Ines Muro', email: 'ines@email.com', password:'starwars'})
user5 = User.create({name: 'Mafalda Mckenna', email: 'mafalda@email.com', password:'starwars'})
user6 = User.create({name: 'Nicolette Potvin', email: 'nicolette@email.com', password:'starwars'})
user7 = User.create({name: 'Nicholas Tindell', email: 'nicholas@email.com', password:'starwars'})
user8 = User.create({name: 'Antionette Singer', email: 'antoinette@email.com', password:'starwars'})

group1 = Group.create({title: 'Swimming', location: "New York City", description: "This meetup is for Byte Academy students, alumni and community members.  Member interests may include: education, networking, startups, programming, FinTech, MedTech, Data Science, women in tech, blockchain and more. About Byte Academy:  Byte Academy is a coding bootcamp in New York City with full and part-time programs in Full Stack Python development, FinTech (financial technology), Data Sciences and MedTech (medical technology). Byte Academy’s original full-time bootcamp was the first to teach Python programming in New York City. We offer comprehensive financial aid and all women receive $2,000 scholarships to Byte Academy.   With our tuition deferral program, qualified individuals pay zero tuition until hired.

Byte Academy accepts  Applications on a rolling basis.  Sign Up for our Part and Full-Time FinTech, Data Science and Full Stack Python Coding bootcamps", category: "diverse", creator_id: User.all.sample.id})
group2 = Group.create({title: 'Pickup Basketball', location: "New York City", description: "play once a week", category: "casual", creator_id: User.all.sample.id})
group3 = Group.create({title: 'Pickup Football', location: "New York City", description: "flag football and touch football", category: "competitive", creator_id: User.all.sample.id})
group4 = Group.create({title: 'Pickup Football', location: "New York City", description: "flag football and touch football", category: "competitive", creator_id: User.all.sample.id})
group5 = Group.create({title: 'Pickup Football', location: "New York City", description: "flag football and touch football", category: "competitive", creator_id: User.all.sample.id})
group6 = Group.create({title: 'Pickup Football', location: "New York City", description: "flag football and touch football", category: "competitive", creator_id: User.all.sample.id})

m1 = Membership.create({user_id: group1.creator_id, group_id: group1.id })
m2 = Membership.create({user_id: group2.creator_id, group_id: group2.id})
m3 = Membership.create({user_id: group3.creator_id, group_id: group3.id})
m4 = Membership.create({user_id: group4.creator_id, group_id: group4.id})
m5 = Membership.create({user_id: group5.creator_id, group_id: group5.id})
m6 = Membership.create({user_id: group6.creator_id, group_id: group6.id})
m7 = Membership.create({user_id: user3.id, group_id: group1.id})
m8 = Membership.create({user_id: user5.id, group_id: group1.id})
