json.extract! user, :id, :email, :name, :picture
json.image_url asset_path(user.image.url)
