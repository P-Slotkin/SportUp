json.extract! group, :id, :description, :location, :category, :title, :creator_id
json.events do
  json.array! group.events do |event|
    json.partial! 'api/events/allgroupevents', event: event
  end
end
json.image_url asset_path(group.image.url)
