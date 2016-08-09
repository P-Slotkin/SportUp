json.extract! event, :id, :description, :location, :title, :creator_id, :group_id
json.members do
  json.array! event.attenders do |attender|
    json.partial! 'api/users/user', user: attender
  end
end
json.rsvps event.rsvps
json.creator event.user
json.image_url asset_path(event.image.url)
