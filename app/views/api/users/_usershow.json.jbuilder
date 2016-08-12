json.extract! user, :id, :email, :name, :location, :created_at, :interests
json.groups do
  json.array! user.groups do |group|
    json.partial! '/api/groups/usergroups', group: group
  end
end
json.image_url asset_path(user.image.url)
