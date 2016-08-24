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
Event.delete_all
Comment.delete_all
Rsvp.delete_all


user1 = User.create({name: 'Russell Carmen', email: 'russell@email.com', password:'starwars', image: File.open('app/assets/images/pic1.jpg')})
user2 = User.create({name: 'Jeff Commander', email: 'jeff@email.com', password:'starwars', image: File.open('app/assets/images/pic2.jpg')})
user3 = User.create({name: 'Aleshia Conkle', email: 'aleshia@email.com', password:'starwars', image: File.open('app/assets/images/pic3.jpg')})
user4 = User.create({name: 'Ines Muro', email: 'ines@email.com', password:'starwars', image: File.open('app/assets/images/pic4.jpg')})
user5 = User.create({name: 'Mafalda Mckenna', email: 'mafalda@email.com', password:'starwars', image: File.open('app/assets/images/pic5.jpg')})
user6 = User.create({name: 'Nicolette Potvin', email: 'nicolette@email.com', password:'starwars', image: File.open('app/assets/images/pic6.jpg')})
user7 = User.create({name: 'Nicholas Tindell', email: 'nicholas@email.com', password:'starwars', image: File.open('app/assets/images/pic7.jpg')})
user8 = User.create({name: 'Antionette Singer', email: 'antoinette@email.com', password:'starwars', image: File.open('app/assets/images/pic8.jpg')})

group1 = Group.create({image: File.open('app/assets/images/swimming.jpg'), title: 'NYC Swimming', location: "New York City",
  description: "New York City Swim Club is a community of swimmers of all levels and backgrounds, including recreational swimmers, competitive swimmers, surfers, triathletes, fitness buffs and water lovers. We're devoted to connecting people of like-minds, with a love for swimming, both in and out of the waters. We will organize events, like happy hours, lectures, demos, swim outings, group swims, training sessions and more.

Let's be inspired, swim & have some fun together!",
 category: "diverse", creator_id: user6.id})
group2 = Group.create({image: File.open('app/assets/images/basketball.jpg'), title: 'NYC Basketball', location: "New York City",
  description: "This group is for anyone looking for a good game of Saturday morning basketball. We keep the teams balanced and all skill levels are welcome. We have two co-organizers so odds are you can get a game in during the week as well. Come out, break a sweat, make a friend.",
   category: "casual", creator_id: user2.id})
group3 = Group.create({image: File.open('app/assets/images/football.jpg'), title: 'Central Park Pickup Football', location: "New York City",
  description: "We are a group comprised of young professionals who want to be physically active by playing competitive, yet fun and exciting football games. Some of us have been playing with each other for over four years and have established a great dynamic. We are looking for players who have positive attitudes, collaborate well with others and people who are laid back in the sense that their main priority is to enjoy the game and not to complain about trivial issues. If you are a carefree and upbeat player who wants to meet new and interesting people, and have some laughs in the process, you will have a great time here.

The group usually meets once a week from Nov. to April. The membership dues is $6.00 per game for roughly 3 hours of play, which covers permits, meetup fees, equipment, organizational duties and a host of other things. You can pay directly online when you RSVP. The skill level of the group is intermediate, but all levels are welcomed. You must be 21 years old to play.",
  category: "competitive", creator_id: user4.id})
group4 = Group.create({image: File.open('app/assets/images/flagfootball.jpg'), title: 'Brooklyn Flag Football', location: "New York City",
  description: "We are a group comprised of young professionals who want to be physically active by playing competitive, yet fun and exciting football games. Some of us have been playing with each other for over four years and have established a great dynamic. We are looking for players who have positive attitudes, collaborate well with others and people who are laid back in the sense that their main priority is to enjoy the game and not to complain about trivial issues. If you are a carefree and upbeat player who wants to meet new and interesting people, and have some laughs in the process, you will have a great time here.

The group usually meets once a week from Nov. to April. The membership dues is $6.00 per game for roughly 3 hours of play, which covers permits, meetup fees, equipment, organizational duties and a host of other things. You can pay directly online when you RSVP. The skill level of the group is intermediate, but all levels are welcomed. You must be 21 years old to play.",
  category: "competitive", creator_id: user1.id})
group5 = Group.create({image: File.open('app/assets/images/capture.jpg'), title: 'Capture the Flag NYC', location: "New York City",
  description: "We are a group of many ages, looking to relive the glory days of playing capture the flag during elementary school gym class. We also dabble in dodgeball, handball, and other fun 'gym class' games. The group is for people looking to share some laughs and not necessarily looking for intense competition. We try to get together at least once a week and sometimes we vote on our activity. All athletic abilities are welcome as long as you bring a positive attitude!",
  category: "competitive", creator_id: user4.id})
group6 = Group.create({image: File.open('app/assets/images/bball.jpg'), title: 'Lower East Side Basketball', location: "New York City",
  description: "This group is for anyone looking for a good game of Saturday morning basketball. We keep the teams balanced and all skill levels are welcome. We have two co-organizers so odds are you can get a game in during the week as well. Come out, break a sweat, make a friend.",
  category: "competitive", creator_id: user5.id})

m1 = Membership.create({user_id: group1.creator_id, group_id: group1.id })
m2 = Membership.create({user_id: group2.creator_id, group_id: group2.id})
m3 = Membership.create({user_id: group3.creator_id, group_id: group3.id})
m4 = Membership.create({user_id: group4.creator_id, group_id: group4.id})
m5 = Membership.create({user_id: group5.creator_id, group_id: group5.id})
m6 = Membership.create({user_id: group6.creator_id, group_id: group6.id})
m7 = Membership.create({user_id: user3.id, group_id: group1.id})
m8 = Membership.create({user_id: user5.id, group_id: group1.id})
Membership.create({user_id: user1.id, group_id: group1.id})
Membership.create({user_id: user2.id, group_id: group1.id})
Membership.create({user_id: user1.id, group_id: group2.id})
Membership.create({user_id: user3.id, group_id: group2.id})
Membership.create({user_id: user4.id, group_id: group2.id})
Membership.create({user_id: user5.id, group_id: group3.id})
Membership.create({user_id: user6.id, group_id: group3.id})
Membership.create({user_id: user7.id, group_id: group3.id})
Membership.create({user_id: user8.id, group_id: group4.id})
Membership.create({user_id: user3.id, group_id: group4.id})
Membership.create({user_id: user4.id, group_id: group4.id})
Membership.create({user_id: user5.id, group_id: group5.id})
Membership.create({user_id: user6.id, group_id: group5.id})
Membership.create({user_id: user7.id, group_id: group5.id})
Membership.create({user_id: user1.id, group_id: group6.id})
Membership.create({user_id: user8.id, group_id: group6.id})
Membership.create({user_id: user4.id, group_id: group6.id})


e1 = Event.create({date: '2016-09-12 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e19 = Event.create({date: '2016-09-19 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e20 = Event.create({date: '2016-09-26 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e21 = Event.create({date: '2016-10-03 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e22 = Event.create({date: '2016-10-10 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e23 = Event.create({date: '2016-10-17 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e24 = Event.create({date: '2016-10-24 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e25 = Event.create({date: '2016-10-31 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e26 = Event.create({date: '2016-11-07 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e27 = Event.create({date: '2016-11-14 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e28 = Event.create({date: '2016-11-21 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e29 = Event.create({date: '2016-11-28 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e13 = Event.create({date: '2016-09-05 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e14 = Event.create({date: '2016-08-29 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e15 = Event.create({date: '2016-08-22 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e2 = Event.create({date: '2016-09-13 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e30 = Event.create({date: '2016-09-13 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e31 = Event.create({date: '2016-09-20 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e32 = Event.create({date: '2016-09-27 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e33 = Event.create({date: '2016-10-04 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e34 = Event.create({date: '2016-10-11 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e35 = Event.create({date: '2016-10-18 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e36 = Event.create({date: '2016-10-25 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e37 = Event.create({date: '2016-11-01 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e38 = Event.create({date: '2016-11-08 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e39 = Event.create({date: '2016-11-15 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e40 = Event.create({date: '2016-11-22 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e41 = Event.create({date: '2016-11-29 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e16 = Event.create({date: '2016-09-06 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e17 = Event.create({date: '2016-08-30 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e18 = Event.create({date: '2016-08-23 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e3 = Event.create({date: '2016-09-17 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e42 = Event.create({date: '2016-09-24 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e43 = Event.create({date: '2016-10-01 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e44 = Event.create({date: '2016-10-08 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e45 = Event.create({date: '2016-10-15 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e46 = Event.create({date: '2016-10-22 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e47 = Event.create({date: '2016-10-29 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e48 = Event.create({date: '2016-11-05 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e49 = Event.create({date: '2016-11-12 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e50 = Event.create({date: '2016-11-19 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e51 = Event.create({date: '2016-11-26 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "The monthly 7v7 tournament is back! This is slightly more competitive than our other events, so bring your A-game! Show up with your team and we will either organize a bracket, or round robin, depending on the turnout. This month is touch football (TWO HANDS). The tagger is the authority here (if (s)he says you were tagged, then you were tagged). We have an awesome prize for the best 7s team this month! So come out and enjoy the summer!",
  location: "TBD" })
e4 = Event.create({date: '2016-09-15 21:30:00', creator_id: group4.creator_id, group_id: group4.id, title: "Pickup Flag Football!",
  description: "We got some sweet new flags to break in! All skill levels welcome! We might divide into multiple games if the turnout is high (which it should be because it's summer). This is not an extremely comptetitive environment. This is a laid back event for casual and fun football! Bring your positive attitude (and water)! See you all there!",
  location: "Great Lawn" })
e5 = Event.create({date: '2016-09-16 21:30:00', creator_id: group5.creator_id, group_id: group5.id, title: "Pickup Flag Football!",
  description: "We got some sweet new flags to break in! All skill levels welcome! We might divide into multiple games if the turnout is high (which it should be because it's summer). This is not an extremely comptetitive environment. This is a laid back event for casual and fun football! Bring your positive attitude (and water)! See you all there!",
  location: "Great Lawn" })
e6 = Event.create({date: '2016-09-14 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e52 = Event.create({date: '2016-09-07 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e53 = Event.create({date: '2016-8-31 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e54 = Event.create({date: '2016-09-21 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e55 = Event.create({date: '2016-09-28 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e56 = Event.create({date: '2016-10-05 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e57 = Event.create({date: '2016-10-12 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e58 = Event.create({date: '2016-10-19 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e59 = Event.create({date: '2016-10-26 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e60 = Event.create({date: '2016-11-02 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e61 = Event.create({date: '2016-11-09 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e62 = Event.create({date: '2016-11-16 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e63 = Event.create({date: '2016-11-23 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e64 = Event.create({date: '2016-11-30 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "It's everyone's favorite event! Command capture the flag is similar to regular capture the flag, except for one key difference. Instead of being played on a field, the game will be held in the woods and the flags will not be hidden by each respective team. We will meet at the usual spot and then walk 10 minutes to our arena! Just some words for the wise: be careful (don't run into a tree), stealth is an option in this game mode, and have fun! See you all our there!",
  location: "Great Lawn" })
e7 = Event.create({date: '2016-09-18 21:30:00', creator_id: group1.creator_id, group_id: group1.id, title: "Water Polo!",
  description: "All levels practice. Coached by Granger. This practice is about water polo. Emphasis is on playing and learning the game by playing. Some of us have been playing since childhood. Others have picked it up as adults. We're friendly and inclusive, but we play hard. Beginners are welcome, but you must be a good swimmer. You MUST bring a lock for a gym locker. You should bring an athletic bathing suit, goggles, and a towel. Bring a swim cap if you have long hair.",
  location: "Central Park Reservoir!" })
e8 = Event.create({date: '2016-09-19 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "All levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Courts" })
e9 = Event.create({date: '2016-09-10 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "3v3 Bracket, BYOFootballs Please!",
  description: "ll levels welcome! Gather your squad together for some 3v3 action! You're welcome to up without a team and we will find a team for you to play with. Last week we had 16 teams! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to five (or 20 minutes). No first downs. Two-hand touch (the tagger is the authority here) (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Great Lawn" })
e10 = Event.create({date: '2016-09-11 21:30:00', creator_id: group4.creator_id, group_id: group4.id, title: "Pickup Flag Football!",
  description: "We got some sweet new flags to break in! All skill levels welcome! We might divide into multiple games if the turnout is high (which it should be because it's summer). This is not an extremely comptetitive environment. This is a laid back event for casual and fun football! Bring your positive attitude (and water)! See you all there!",
  location: "Great Lawn" })
e11 = Event.create({date: '2016-09-09 21:30:00', creator_id: group5.creator_id, group_id: group5.id, title: "Capture the Flag!",
  description: "We have a massive field reserved! If enough people show up we can experiment with more than two teams or adding more flags! We will agree on jail and flag-guard rules at the start. Bringing both a dark and light shirt would help with team selection. Remember that it's very hot outside so bring water/sun protection. This event is for all ages and abilities. It's going to be a blast so see you all there!",
  location: "Great Lawn" })
e12 = Event.create({date: '2016-09-08 21:30:00', creator_id: group6.creator_id, group_id: group6.id, title: "1v1/2v2 Brackets",
  description: "All levels welcome! Bring your friends! You're welcome to up without a team for the 2v2 and we will find a partner for you to play with. Last week we had 16 teams for the 2v2 and 32 entrants for the 1v1! Depending on the turnout, we will have a bracket or round robin. The MANDATORY RULES are as follows: first to eleven (1s and 2s). The scoring team gets the ball back. Call your own fouls (RESPECT THE CALL). ALL DISPUTES GO TO THE ORGANIZER(me). Should be fun!",
  location: "Great Lawn" })
Rsvp.create({user_id: user1.id, event_id: e1.id })
Rsvp.create({user_id: user2.id, event_id: e1.id })
Rsvp.create({user_id: user3.id, event_id: e1.id })
Rsvp.create({user_id: user5.id, event_id: e1.id })
Rsvp.create({user_id: user1.id, event_id: e13.id })
Rsvp.create({user_id: user2.id, event_id: e13.id })
Rsvp.create({user_id: user3.id, event_id: e13.id })
Rsvp.create({user_id: user5.id, event_id: e13.id })
Rsvp.create({user_id: user1.id, event_id: e14.id })
Rsvp.create({user_id: user2.id, event_id: e14.id })
Rsvp.create({user_id: user3.id, event_id: e14.id })
Rsvp.create({user_id: user5.id, event_id: e14.id })
Rsvp.create({user_id: user1.id, event_id: e15.id })
Rsvp.create({user_id: user2.id, event_id: e15.id })
Rsvp.create({user_id: user3.id, event_id: e15.id })
Rsvp.create({user_id: user5.id, event_id: e15.id })
Rsvp.create({user_id: user1.id, event_id: e19.id })
Rsvp.create({user_id: user2.id, event_id: e19.id })
Rsvp.create({user_id: user3.id, event_id: e19.id })
Rsvp.create({user_id: user5.id, event_id: e19.id })
Rsvp.create({user_id: user1.id, event_id: e20.id })
Rsvp.create({user_id: user2.id, event_id: e20.id })
Rsvp.create({user_id: user3.id, event_id: e20.id })
Rsvp.create({user_id: user5.id, event_id: e20.id })
Rsvp.create({user_id: user1.id, event_id: e21.id })
Rsvp.create({user_id: user2.id, event_id: e21.id })
Rsvp.create({user_id: user3.id, event_id: e21.id })
Rsvp.create({user_id: user5.id, event_id: e21.id })
Rsvp.create({user_id: user1.id, event_id: e22.id })
Rsvp.create({user_id: user2.id, event_id: e22.id })
Rsvp.create({user_id: user3.id, event_id: e22.id })
Rsvp.create({user_id: user5.id, event_id: e22.id })
Rsvp.create({user_id: user1.id, event_id: e23.id })
Rsvp.create({user_id: user2.id, event_id: e23.id })
Rsvp.create({user_id: user3.id, event_id: e23.id })
Rsvp.create({user_id: user5.id, event_id: e23.id })
Rsvp.create({user_id: user1.id, event_id: e24.id })
Rsvp.create({user_id: user2.id, event_id: e24.id })
Rsvp.create({user_id: user3.id, event_id: e24.id })
Rsvp.create({user_id: user5.id, event_id: e24.id })
Rsvp.create({user_id: user1.id, event_id: e25.id })
Rsvp.create({user_id: user2.id, event_id: e25.id })
Rsvp.create({user_id: user3.id, event_id: e25.id })
Rsvp.create({user_id: user5.id, event_id: e25.id })
Rsvp.create({user_id: user1.id, event_id: e26.id })
Rsvp.create({user_id: user2.id, event_id: e26.id })
Rsvp.create({user_id: user3.id, event_id: e26.id })
Rsvp.create({user_id: user5.id, event_id: e26.id })
Rsvp.create({user_id: user1.id, event_id: e27.id })
Rsvp.create({user_id: user2.id, event_id: e27.id })
Rsvp.create({user_id: user3.id, event_id: e27.id })
Rsvp.create({user_id: user5.id, event_id: e27.id })
Rsvp.create({user_id: user1.id, event_id: e28.id })
Rsvp.create({user_id: user2.id, event_id: e28.id })
Rsvp.create({user_id: user3.id, event_id: e28.id })
Rsvp.create({user_id: user5.id, event_id: e28.id })
Rsvp.create({user_id: user1.id, event_id: e29.id })
Rsvp.create({user_id: user2.id, event_id: e29.id })
Rsvp.create({user_id: user3.id, event_id: e29.id })
Rsvp.create({user_id: user5.id, event_id: e29.id })
Rsvp.create({user_id: user1.id, event_id: e2.id })
Rsvp.create({user_id: user2.id, event_id: e2.id })
Rsvp.create({user_id: user3.id, event_id: e2.id })
Rsvp.create({user_id: user4.id, event_id: e2.id })
Rsvp.create({user_id: user1.id, event_id: e30.id })
Rsvp.create({user_id: user2.id, event_id: e30.id })
Rsvp.create({user_id: user3.id, event_id: e30.id })
Rsvp.create({user_id: user4.id, event_id: e30.id })
Rsvp.create({user_id: user1.id, event_id: e31.id })
Rsvp.create({user_id: user2.id, event_id: e31.id })
Rsvp.create({user_id: user3.id, event_id: e31.id })
Rsvp.create({user_id: user4.id, event_id: e31.id })
Rsvp.create({user_id: user1.id, event_id: e32.id })
Rsvp.create({user_id: user2.id, event_id: e32.id })
Rsvp.create({user_id: user3.id, event_id: e32.id })
Rsvp.create({user_id: user4.id, event_id: e32.id })
Rsvp.create({user_id: user1.id, event_id: e33.id })
Rsvp.create({user_id: user2.id, event_id: e33.id })
Rsvp.create({user_id: user3.id, event_id: e33.id })
Rsvp.create({user_id: user4.id, event_id: e33.id })
Rsvp.create({user_id: user1.id, event_id: e34.id })
Rsvp.create({user_id: user2.id, event_id: e34.id })
Rsvp.create({user_id: user3.id, event_id: e34.id })
Rsvp.create({user_id: user4.id, event_id: e34.id })
Rsvp.create({user_id: user1.id, event_id: e35.id })
Rsvp.create({user_id: user2.id, event_id: e35.id })
Rsvp.create({user_id: user3.id, event_id: e35.id })
Rsvp.create({user_id: user4.id, event_id: e35.id })
Rsvp.create({user_id: user1.id, event_id: e36.id })
Rsvp.create({user_id: user2.id, event_id: e36.id })
Rsvp.create({user_id: user3.id, event_id: e36.id })
Rsvp.create({user_id: user4.id, event_id: e36.id })
Rsvp.create({user_id: user1.id, event_id: e37.id })
Rsvp.create({user_id: user2.id, event_id: e37.id })
Rsvp.create({user_id: user3.id, event_id: e37.id })
Rsvp.create({user_id: user4.id, event_id: e37.id })
Rsvp.create({user_id: user1.id, event_id: e38.id })
Rsvp.create({user_id: user2.id, event_id: e38.id })
Rsvp.create({user_id: user3.id, event_id: e38.id })
Rsvp.create({user_id: user4.id, event_id: e38.id })
Rsvp.create({user_id: user1.id, event_id: e39.id })
Rsvp.create({user_id: user2.id, event_id: e39.id })
Rsvp.create({user_id: user3.id, event_id: e39.id })
Rsvp.create({user_id: user4.id, event_id: e39.id })
Rsvp.create({user_id: user1.id, event_id: e40.id })
Rsvp.create({user_id: user2.id, event_id: e40.id })
Rsvp.create({user_id: user3.id, event_id: e40.id })
Rsvp.create({user_id: user4.id, event_id: e40.id })
Rsvp.create({user_id: user1.id, event_id: e41.id })
Rsvp.create({user_id: user2.id, event_id: e41.id })
Rsvp.create({user_id: user3.id, event_id: e41.id })
Rsvp.create({user_id: user4.id, event_id: e41.id })
r32 = Rsvp.create({user_id: user3.id, event_id: e16.id })
r33 = Rsvp.create({user_id: user4.id, event_id: e16.id })
r34 = Rsvp.create({user_id: user5.id, event_id: e16.id })
r35 = Rsvp.create({user_id: group2.creator_id, event_id: e17.id })
r36 = Rsvp.create({user_id: user3.id, event_id: e17.id })
r37 = Rsvp.create({user_id: user4.id, event_id: e17.id })
r38 = Rsvp.create({user_id: user5.id, event_id: e17.id })
r39 = Rsvp.create({user_id: group2.creator_id, event_id: e18.id })
r40 = Rsvp.create({user_id: user3.id, event_id: e18.id })
r41 = Rsvp.create({user_id: user4.id, event_id: e18.id })
r42 = Rsvp.create({user_id: user5.id, event_id: e18.id })
r3 = Rsvp.create({user_id: group3.creator_id, event_id: e3.id })
r43 = Rsvp.create({user_id: user5.id, event_id: e3.id })
r44 = Rsvp.create({user_id: user6.id, event_id: e3.id })
r45 = Rsvp.create({user_id: user7.id, event_id: e3.id })
Rsvp.create({user_id: group3.creator_id, event_id: e42.id })
Rsvp.create({user_id: user5.id, event_id: e42.id })
Rsvp.create({user_id: user6.id, event_id: e42.id })
Rsvp.create({user_id: user7.id, event_id: e42.id })
Rsvp.create({user_id: group3.creator_id, event_id: e43.id })
Rsvp.create({user_id: user5.id, event_id: e43.id })
Rsvp.create({user_id: user6.id, event_id: e43.id })
Rsvp.create({user_id: user7.id, event_id: e43.id })
Rsvp.create({user_id: group3.creator_id, event_id: e44.id })
Rsvp.create({user_id: user5.id, event_id: e44.id })
Rsvp.create({user_id: user6.id, event_id: e44.id })
Rsvp.create({user_id: user7.id, event_id: e44.id })
Rsvp.create({user_id: group3.creator_id, event_id: e45.id })
Rsvp.create({user_id: user5.id, event_id: e45.id })
Rsvp.create({user_id: user6.id, event_id: e45.id })
Rsvp.create({user_id: user7.id, event_id: e45.id })
Rsvp.create({user_id: group3.creator_id, event_id: e46.id })
Rsvp.create({user_id: user5.id, event_id: e46.id })
Rsvp.create({user_id: user6.id, event_id: e46.id })
Rsvp.create({user_id: user7.id, event_id: e46.id })
Rsvp.create({user_id: group3.creator_id, event_id: e47.id })
Rsvp.create({user_id: user5.id, event_id: e47.id })
Rsvp.create({user_id: user6.id, event_id: e47.id })
Rsvp.create({user_id: user7.id, event_id: e47.id })
Rsvp.create({user_id: group3.creator_id, event_id: e48.id })
Rsvp.create({user_id: user5.id, event_id: e48.id })
Rsvp.create({user_id: user6.id, event_id: e48.id })
Rsvp.create({user_id: user7.id, event_id: e48.id })
Rsvp.create({user_id: group3.creator_id, event_id: e49.id })
Rsvp.create({user_id: user5.id, event_id: e49.id })
Rsvp.create({user_id: user6.id, event_id: e49.id })
Rsvp.create({user_id: user7.id, event_id: e49.id })
Rsvp.create({user_id: group3.creator_id, event_id: e50.id })
Rsvp.create({user_id: user5.id, event_id: e50.id })
Rsvp.create({user_id: user6.id, event_id: e50.id })
Rsvp.create({user_id: user7.id, event_id: e50.id })
Rsvp.create({user_id: group3.creator_id, event_id: e51.id })
Rsvp.create({user_id: user5.id, event_id: e51.id })
Rsvp.create({user_id: user6.id, event_id: e51.id })
Rsvp.create({user_id: user7.id, event_id: e51.id })
r4 = Rsvp.create({user_id: group4.creator_id, event_id: e4.id })
Rsvp.create({user_id: user8.id, event_id: e4.id })
Rsvp.create({user_id: user3.id, event_id: e4.id })
Rsvp.create({user_id: user4.id, event_id: e4.id })
r5 = Rsvp.create({user_id: group5.creator_id, event_id: e5.id })
Rsvp.create({user_id: user5.id, event_id: e5.id })
Rsvp.create({user_id: user6.id, event_id: e5.id })
Rsvp.create({user_id: user7.id, event_id: e5.id })
r6 = Rsvp.create({user_id: group6.creator_id, event_id: e6.id })
Rsvp.create({user_id: user1.id, event_id: e6.id })
Rsvp.create({user_id: user8.id, event_id: e6.id })
Rsvp.create({user_id: user4.id, event_id: e6.id })
Rsvp.create({user_id: group6.creator_id, event_id: e52.id })
Rsvp.create({user_id: user1.id, event_id: e52.id })
Rsvp.create({user_id: user8.id, event_id: e52.id })
Rsvp.create({user_id: user4.id, event_id: e52.id })
Rsvp.create({user_id: group6.creator_id, event_id: e53.id })
Rsvp.create({user_id: user1.id, event_id: e53.id })
Rsvp.create({user_id: user8.id, event_id: e53.id })
Rsvp.create({user_id: user4.id, event_id: e53.id })
Rsvp.create({user_id: group6.creator_id, event_id: e54.id })
Rsvp.create({user_id: user1.id, event_id: e54.id })
Rsvp.create({user_id: user8.id, event_id: e54.id })
Rsvp.create({user_id: user4.id, event_id: e54.id })
Rsvp.create({user_id: group6.creator_id, event_id: e55.id })
Rsvp.create({user_id: user1.id, event_id: e55.id })
Rsvp.create({user_id: user8.id, event_id: e55.id })
Rsvp.create({user_id: user4.id, event_id: e55.id })
Rsvp.create({user_id: group6.creator_id, event_id: e56.id })
Rsvp.create({user_id: user1.id, event_id: e56.id })
Rsvp.create({user_id: user8.id, event_id: e56.id })
Rsvp.create({user_id: user4.id, event_id: e56.id })
Rsvp.create({user_id: group6.creator_id, event_id: e57.id })
Rsvp.create({user_id: user1.id, event_id: e57.id })
Rsvp.create({user_id: user8.id, event_id: e57.id })
Rsvp.create({user_id: user4.id, event_id: e57.id })
Rsvp.create({user_id: group6.creator_id, event_id: e58.id })
Rsvp.create({user_id: user1.id, event_id: e58.id })
Rsvp.create({user_id: user8.id, event_id: e58.id })
Rsvp.create({user_id: user4.id, event_id: e58.id })
Rsvp.create({user_id: group6.creator_id, event_id: e59.id })
Rsvp.create({user_id: user1.id, event_id: e59.id })
Rsvp.create({user_id: user8.id, event_id: e59.id })
Rsvp.create({user_id: user4.id, event_id: e59.id })
Rsvp.create({user_id: group6.creator_id, event_id: e60.id })
Rsvp.create({user_id: user1.id, event_id: e60.id })
Rsvp.create({user_id: user8.id, event_id: e60.id })
Rsvp.create({user_id: user4.id, event_id: e60.id })
Rsvp.create({user_id: group6.creator_id, event_id: e61.id })
Rsvp.create({user_id: user1.id, event_id: e61.id })
Rsvp.create({user_id: user8.id, event_id: e61.id })
Rsvp.create({user_id: user4.id, event_id: e61.id })
Rsvp.create({user_id: group6.creator_id, event_id: e62.id })
Rsvp.create({user_id: user1.id, event_id: e62.id })
Rsvp.create({user_id: user8.id, event_id: e62.id })
Rsvp.create({user_id: user4.id, event_id: e62.id })
Rsvp.create({user_id: group6.creator_id, event_id: e63.id })
Rsvp.create({user_id: user1.id, event_id: e63.id })
Rsvp.create({user_id: user8.id, event_id: e63.id })
Rsvp.create({user_id: user4.id, event_id: e63.id })
Rsvp.create({user_id: group6.creator_id, event_id: e64.id })
Rsvp.create({user_id: user1.id, event_id: e64.id })
Rsvp.create({user_id: user8.id, event_id: e64.id })
Rsvp.create({user_id: user4.id, event_id: e64.id })
r7 = Rsvp.create({user_id: group1.creator_id, event_id: e7.id })
r8 = Rsvp.create({user_id: group2.creator_id, event_id: e8.id })
r9 = Rsvp.create({user_id: group3.creator_id, event_id: e9.id })
r46 = Rsvp.create({user_id: user5.id, event_id: e9.id })
r47 = Rsvp.create({user_id: user6.id, event_id: e9.id })
r48 = Rsvp.create({user_id: user7.id, event_id: e9.id })
r10 = Rsvp.create({user_id: group4.creator_id, event_id: e10.id })
Rsvp.create({user_id: user8.id, event_id: e10.id })
Rsvp.create({user_id: user3.id, event_id: e10.id })
Rsvp.create({user_id: user4.id, event_id: e10.id })
r11 = Rsvp.create({user_id: group5.creator_id, event_id: e11.id })
Rsvp.create({user_id: user5.id, event_id: e11.id })
Rsvp.create({user_id: user6.id, event_id: e11.id })
Rsvp.create({user_id: user7.id, event_id: e11.id })
r12 = Rsvp.create({user_id: group6.creator_id, event_id: e12.id })
Rsvp.create({user_id: user1.id, event_id: e12.id })
Rsvp.create({user_id: user8.id, event_id: e12.id })
Rsvp.create({user_id: user4.id, event_id: e12.id })

c1 = Comment.create({author_id: user1.id, body:"See everyone there!", event_id: e1.id})
c2 = Comment.create({author_id: user2.id, body:"Yup! Should be fun!", event_id: e1.id})
c3 = Comment.create({author_id: user3.id, body:"Is this a free event?", event_id: e1.id})
c4 = Comment.create({author_id: user4.id, body:"Ya. I'll give a shoutout to our sponsors at the pool", event_id: e1.id})
c5 = Comment.create({author_id: user5.id, body:"Sweet", event_id: e1.id})
c6 = Comment.create({author_id: user6.id, body:"Should I bring anything?", event_id: e1.id})
c7 = Comment.create({author_id: user7.id, body:"Nope just regular swimwear.", event_id: e1.id})
