# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Groups

- `GET /api/groups`
  - Groups index/search
  - accepts 'group_name' query param to list notes by tag
  - accepts 'group_description' params
- `POST /api/groups`
- `GET /api/groups/:id`
- `PATCH /api/groups/:id`
- `DELETE /api/groups/:id`

### Members

- A group's members will be included in the group show template
- `GET /api/members`
- `GET /api/groups/:id/members`
- `POST /api/groups/:id/members`: add member to group
  - if member doesn't already exist, it will be created
- `DELETE /api/groups/:group_id/members/:member_id`: remove member from group by
  id

### Events

- `GET /api/events`
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`
- `GET /api/groups/:id/events`
  - index of all events for a group

### RSVPs

- A event's RSVPs will be included in the event show template
- `GET /api/RSVPs`
- `GET /api/events/:id/RSVPs`
- `POST /api/events/:id/RSVPs`: add RSVP to event
  - if RSVP doesn't already exist, it will be created
- `DELETE /api/events/:events_id/RSVPs/:RSVP_id`: remove RSVP from event by
  id

### Comments

- A event's Comments will be included in the event show template
- `GET /api/Comments`
- `GET /api/events/:id/Comments`
- `POST /api/events/:id/Comments`: add Comment to event
  - if Comment doesn't already exist, it will be created
- `DELETE /api/events/:events_id/Comments/:Comment_id`: remove Comment from event by
  id


