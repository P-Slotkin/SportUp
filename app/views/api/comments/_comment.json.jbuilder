json.extract! comment, :id, :body, :author_id, :event_id, :created_at
json.creator do
  json.partial! 'api/users/user', user: comment.user
end
