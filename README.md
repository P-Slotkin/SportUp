#SportUp

http://sport-up.xyz.com/

##Overview

This site is inspired by the popular app 'Meetup', but it focuses on groups specifically for sport gatherings. Users can create/find/join groups, create/find/join events in said groups, and participate in comment threads in each event. Events can be viewed in list form or in an easy to read calendar.
 ![alt text](https://github.com/P-Slotkin/SportUp/blob/master/app/assets/images/homepage.jpg "Homepage")

##Main Features

 - User signup, login, and session authentication
 ![alt text](https://github.com/P-Slotkin/SportUp/blob/master/app/assets/images/authcode.jpg "User Authentication")
 - CRUD features (users, groups, events, comments)
 - quicksearch feature
   - real-time results as the user types in the search bar
   - search by location, description, or group name
 - calendar with easy navigation
![alt text](https://github.com/P-Slotkin/SportUp/blob/master/app/assets/images/calendarscreenshot.jpg "Calendar")

##Implmentation

###Architecture

####Backend

The backend was constructed via Ruby on Rails and uses a PostgreSQL database. There is only one entry point, which means that all features are implemented with ajax requests and json responses. This structure leads to a very fast application.

####Frontend

The frontend was constructed with React. Many React components were linked to URL path locations and thus were easily accessible with the use of hash history. Since the components have a clear hierarchical layout, the parent child relationship available between two React components was very useful.

The flux cycle was implemented for many features, such as groups, events, memberships, event rsvps, sessions, users, and comments. This cycle made it easy to build components that rely on several different data tables and aided debugging, as the error could easily be traced through the cycle.
