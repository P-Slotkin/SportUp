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
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
 category: "diverse", creator_id: user6.id})
group2 = Group.create({image: File.open('app/assets/images/basketball.jpg'), title: 'NYC Basketball', location: "New York City",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
   category: "casual", creator_id: user2.id})
group3 = Group.create({image: File.open('app/assets/images/football.jpg'), title: 'Central Park Pickup Football', location: "New York City",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  category: "competitive", creator_id: user4.id})
group4 = Group.create({image: File.open('app/assets/images/flagfootball.jpg'), title: 'Brooklyn Flag Football', location: "New York City",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  category: "competitive", creator_id: user1.id})
group5 = Group.create({image: File.open('app/assets/images/capture.jpg'), title: 'Capture the Flag NYC', location: "New York City",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  category: "competitive", creator_id: user4.id})
group6 = Group.create({image: File.open('app/assets/images/bball.jpg'), title: 'Lower East Side Basketball', location: "New York City",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
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
Membership.create({user_id: user3.id, group_id: group1.id})
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
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Central Park Reservoir!" })
e13 = Event.create({date: '2016-09-05 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Central Park Reservoir!" })
e14 = Event.create({date: '2016-08-29 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Central Park Reservoir!" })
e15 = Event.create({date: '2016-08-22 21:30:00', creator_id: user6.id, group_id: group1.id, title: "Weekly Water Polo!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Central Park Reservoir!" })
e2 = Event.create({date: '2016-09-13 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Courts" })
e16 = Event.create({date: '2016-09-06 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Courts" })
e17 = Event.create({date: '2016-08-30 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Courts" })
e18 = Event.create({date: '2016-08-23 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Courts" })
e3 = Event.create({date: '2016-09-17 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "7v7",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "TBD" })
e4 = Event.create({date: '2016-09-15 21:30:00', creator_id: group4.creator_id, group_id: group4.id, title: "Pickup Flag Football!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Great Lawn" })
e5 = Event.create({date: '2016-09-16 21:30:00', creator_id: group5.creator_id, group_id: group5.id, title: "Pickup Flag Football!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Great Lawn" })
e6 = Event.create({date: '2016-09-17 21:30:00', creator_id: group6.creator_id, group_id: group5.id, title: "Commando Capture the Flag",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Great Lawn" })
e7 = Event.create({date: '2016-09-18 21:30:00', creator_id: group1.creator_id, group_id: group1.id, title: "Water Polo!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Central Park Reservoir!" })
e8 = Event.create({date: '2016-09-19 21:30:00', creator_id: group2.creator_id, group_id: group2.id, title: "3v3 Tournament",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Courts" })
e9 = Event.create({date: '2016-09-10 21:30:00', creator_id: group3.creator_id, group_id: group3.id, title: "3v3 Bracket, BYOFootballs Please!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Great Lawn" })
e10 = Event.create({date: '2016-09-11 21:30:00', creator_id: group4.creator_id, group_id: group4.id, title: "Pickup Flag Football!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Great Lawn" })
e11 = Event.create({date: '2016-09-09 21:30:00', creator_id: group5.creator_id, group_id: group5.id, title: "Capture the Flag!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Great Lawn" })
e12 = Event.create({date: '2016-09-08 21:30:00', creator_id: group6.creator_id, group_id: group6.id, title: "1v1/2v2 Brackets",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in rutrum ante, nec suscipit dolor. Morbi venenatis justo libero, sit amet tincidunt orci auctor at. Vivamus consequat viverra mattis. Proin iaculis orci nec metus gravida fermentum. Vivamus ligula sapien, elementum at sapien a, varius fermentum arcu. Mauris sodales tempor diam nec ultricies. Nulla facilisi. Mauris eget aliquet sapien, nec varius sem. Ut eu pulvinar felis. Etiam sit amet purus iaculis, venenatis tellus ac, convallis nisi. Sed mollis nibh ligula, eget rhoncus neque lobortis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate hendrerit maximus. Aenean posuere tempor nisi, vitae facilisis eros condimentum non. Mauris ornare semper magna. Vestibulum placerat, tortor a placerat vehicula, erat justo fringilla justo, facilisis vehicula arcu neque vehicula nisi.",
  location: "Great Lawn" })

r1 = Rsvp.create({user_id: group1.creator_id, event_id: e1.id })
r13 = Rsvp.create({user_id: user1.id, event_id: e1.id })
r14 = Rsvp.create({user_id: user2.id, event_id: e1.id })
r15 = Rsvp.create({user_id: user3.id, event_id: e1.id })
r16 = Rsvp.create({user_id: group1.creator_id, event_id: e13.id })
r17 = Rsvp.create({user_id: user1.id, event_id: e13.id })
r18 = Rsvp.create({user_id: user2.id, event_id: e13.id })
r19 = Rsvp.create({user_id: user3.id, event_id: e13.id })
r23 = Rsvp.create({user_id: group1.creator_id, event_id: e14.id })
r24 = Rsvp.create({user_id: user1.id, event_id: e14.id })
r25 = Rsvp.create({user_id: user2.id, event_id: e14.id })
r26 = Rsvp.create({user_id: user3.id, event_id: e14.id })
r27 = Rsvp.create({user_id: group1.creator_id, event_id: e15.id })
r28 = Rsvp.create({user_id: user1.id, event_id: e15.id })
r29 = Rsvp.create({user_id: user2.id, event_id: e15.id })
r30 = Rsvp.create({user_id: user3.id, event_id: e15.id })
r2 = Rsvp.create({user_id: group2.creator_id, event_id: e2.id })
r20 = Rsvp.create({user_id: user3.id, event_id: e2.id })
r21 = Rsvp.create({user_id: user4.id, event_id: e2.id })
r22 = Rsvp.create({user_id: user5.id, event_id: e2.id })
r31 = Rsvp.create({user_id: group2.creator_id, event_id: e16.id })
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
r4 = Rsvp.create({user_id: group4.creator_id, event_id: e4.id })
Rsvp.create({user_id: user8.id, event_id: e4.id })
Rsvp.create({user_id: user3.id, event_id: e4.id })
Rsvp.create({user_id: user4.id, event_id: e4.id })
r5 = Rsvp.create({user_id: group5.creator_id, event_id: e5.id })
Rsvp.create({user_id: user5.id, event_id: e5.id })
Rsvp.create({user_id: user6.id, event_id: e5.id })
Rsvp.create({user_id: user7.id, event_id: e5.id })
r6 = Rsvp.create({user_id: group6.creator_id, event_id: e6.id })
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

c1 = Comment.create({author_id: user1.id, body:"sick comment", event_id: e1.id})
c2 = Comment.create({author_id: user2.id, body:"sick comment", event_id: e1.id})
c3 = Comment.create({author_id: user3.id, body:"sick comment", event_id: e1.id})
c4 = Comment.create({author_id: user4.id, body:"sick comment", event_id: e1.id})
c5 = Comment.create({author_id: user5.id, body:"sick comment", event_id: e1.id})
c6 = Comment.create({author_id: user6.id, body:"sick comment", event_id: e1.id})
c7 = Comment.create({author_id: user7.id, body:"sick comment", event_id: e1.id})
