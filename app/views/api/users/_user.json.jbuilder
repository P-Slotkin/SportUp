json.extract! user, :id, :email, :name, :location, :created_at
json.image_url asset_path(user.image.url)
