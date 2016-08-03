# Phase 4: Calendar (1 days, W2 W 6pm)

## Rails

### Models
* Calendar

### Controllers
* Api::CalendarsController (create, destroy, show, update, edit)

### Views
* Calendar/show.json.jbuilder

## Flux
### Views (React Components)
* CalendarIndex
  - CalendarIndexItem

### Stores
* Calendar

### Actions
* `ApiActions.receiveSingleCalendar`
* `ApiActions.deleteCalendar`
* `CalendarActions.fetchSingleCalendarFromGroup`
* `CalendarActions.createCalendar`
* `CalendarActions.editCalendar`
* `CalendarActions.destroyCalendar`

## Gems/Libraries
