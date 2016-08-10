json.extract! comment, :body, :author_id, :event_id, :created_at
json.creator json.partial! 'api/users/user', user: comment.user
