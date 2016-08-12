json.extract! group, :id, :description, :location, :category, :title, :creator_id
json.members group.members

json.memberships group.memberships
json.events do
  json.array! group.events do |event|
    json.partial! 'api/events/event', event: event
  end
end
json.image_url asset_path(group.image.url)
