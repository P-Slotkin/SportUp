# SportUp

(heroku link!)
http://sport-up.herokuapp.com/

###Minimal Viable Product

Sportup is a clone of the popular webapp 'MeetUp'. It will be built using Ruby
on Rails and React.js. Hopefully, by week 9, this app should have the following
functionality:

- Hosting on Heroku
- New account creation, login, and guest/demo login
- An actual README file (replacing this README)
- Groups
  - viewing/joining groups
  - Smooth, bug-free navigation
  - Properly seeded data to be able to show functionality
  - Correct CSS styling
- Events
  - creating events
  - joining/RSVP(ing) events
  - smooth, bug-free navigation
  - properly seeded data to be able to show functionality
  - correct CSS styling
- Calendar
  - correct event integration
  - smooth, bug-free navigation
  - displays events-seeded data
  - correct CSS styling
- Search
  - search by location, groupname, or group info
  - quicksearch functionality (maybe?)
  - correct CSS styling


### Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

### Implementation Timeline

#### Phase 1: Backend steup and Front End User Authentication (2 days, W1 W 6pm)(complete)
Objective: Functioning rails project with front-end Authentication
- create new project
- User model
- authentication backend setup
- create StaticPages controller and root viewing
- setup webpack and flux skeleton (dont do yet)
- setup APIUtil to ineract with the API
- flux cycle frontend auth
- components for user signup/signin
- blank landing component after signin
- CSS styling
- seed users

#### Phase 2: Group Model, API, and components (2 days, W1 F 6pm)(mostly complete)
Objective: Groups can be created, viewed, edited, joined, left, and destroyed
through the API
- Group model(done)
- seed database with test data(done)
- CRUD API for Groups ( GroupsController)(done)
- jbuilder views for groups(done)
- test out API interaction in console(done)
- implement each Group component, building out the flux loop as needed(working on member display)
  - GroupIndex
  - GroupIndexItem
  - GroupForm
- style Groups components(done)
- seed groups(done)

#### Phase 3: Events (2 days, W2 Tu 6pm)
Objective: Events belong to Groups, can be viewed by group
- create Event model
- build out API, flux loop, and components for:
  - Event CRUD
  - adding events requires a group
  - viewing events
  - rsvp to events
- CSS to style new components
- seed events

#### Phase 4: Calendar (1 day, W2 W 6pm)
Objective: events can be viewed on a calendar
- integrate events to their calendar
- correct CSS styling

#### Phase 5: Search (1 day, W2 Th 6pm)
Objective: functioning search bar
- search by group, group info, or location
- quicksearch functionality
- correct CSS styling

#### Bonus Features (TBD)
- search by categories
- calendar for all groups in search results

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
