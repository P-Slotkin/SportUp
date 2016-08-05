json.extract! group, :id, :description, :location, :category, :title, :picture, :creator_id
json.members group.members
json.image_url asset_path(group.image.url)
