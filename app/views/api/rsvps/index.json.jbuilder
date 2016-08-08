@rsvps.each do |rsvp|
  json.set! rsvp.id do
    json.partial! 'rsvp', rsvp: rsvp
  end
end
