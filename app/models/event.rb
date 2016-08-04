class Event < ActiveRecord::Base
  validates :creator_id, :title, :location, presence: true

  belongs_to(
    :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :creator_id
  )

  has_many(
    :rsvps,
    class_name: "Rsvp",
    primary_key: :id,
    foreign_key: :event_id
  )

  def number_rsvps
    rsvps.count
  end
end
