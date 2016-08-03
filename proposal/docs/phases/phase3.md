# Phase 3: Events (2 day, W2 Tu 6pm)

## Rails
### Models
* Event
* RSVP
* Comments


### Controllers
* Api::EventsController (create, destroy, index, show, update)
* Api::RSVPController (create, destroy)
* Api::CommentsController (create, destroy, show, update)

### Views
* events/index.json.jbuilder
* events/show.json.jbuilder
* RSVP/index.json.jbuilder
* RSVP/show.json.jbuilder
* Comments/index.json.jbuilder
* Comment/show.json.jbuilder

## Flux
### Views (React Components)
* EventsIndex
  - EvemtIndexItem
* EventForm
* RSVPIndex
  - RSVPIndexItem
* CommentsIndex
  - CommentIndexItem

### Stores
* Event
* RSVP 
* Comments

### Actions
* `ApiActions.receiveAllEvents`
* `ApiActions.receiveSingleEvent`
* `ApiActions.deleteEvent`
* `EventActions.fetchAllEvents`
* `EventActions.fetchSingleEvent`
* `EventActions.createEvent`
* `EventActions.editEvent`
* `EventActions.destroyEvent`
* `ApiActions.receiveAllRSVPFromEvent`
* `ApiActions.receiveSingleRSVP`
* `ApiActions.deleteRSVP`
* `RSVPActions.fetchAllRSVPFromEvent`
* `RSVPActions.fetchSingleRSVP`
* `RSVPActions.createRSVP`
* `RSVPActions.destroyRSVP`
* `ApiActions.receiveAllCommentsFromEvent`
* `ApiActions.receiveSingleComment`
* `ApiActions.deleteComment`
* `CommentActions.fetchAllCommentsFromEvent`
* `CommentActions.fetchSingleComment`
* `CommentActions.createComment`
* `CommentActions.editComment`
* `CommentActions.destroyComment`

### ApiUtil
* `ApiUtil.fetchAllEvents`
* `ApiUtil.fetchSingleEvent`
* `ApiUtil.createEvent`
* `ApiUtil.editEvent`
* `ApiUtil.destroyEvent`
* `ApiUtil.receiveAllRSVPFromEvent`
* `ApiUtil.fetchSingleRSVP`
* `ApiUtil.createRSVP`
* `ApiUtil.destroyRSVP`
* `ApiUtil.receiveAllCommentsFromEvent`
* `ApiUtil.receiveSingleComment`
* `ApiUtil.deleteComment`

## Gems/Libraries
