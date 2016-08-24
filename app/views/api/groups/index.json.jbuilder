@groups.each do |group|
  json.set! group.id do
    json.partial! 'groupindex', group: group
  end
end
