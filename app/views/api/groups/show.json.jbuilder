json.extract! @group, :id, :description, :location, :category, :title, :creator_id
json.members do
  json.array! @group.members do |member|
    json.partial! 'api/users/user', user: member
  end
end
json.memberships @group.memberships
json.events do
  json.array! @group.events do |event|
    json.partial! 'api/events/groupevents', event: event
  end
end
json.image_url asset_path(@group.image.url)
