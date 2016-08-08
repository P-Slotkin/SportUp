json.extract! event, :id, :description, :location, :title, :creator_id, :group_id
json.members event.attenders
json.rsvps event.rsvps
json.creator event.user
json.image_url asset_path(event.image.url)
