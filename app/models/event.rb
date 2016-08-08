# == Schema Information
#
# Table name: events
#
#  id                 :integer          not null, primary key
#  creator_id         :integer          not null
#  title              :string           not null
#  description        :string
#  location           :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  group_id           :integer          not null
#

class Event < ActiveRecord::Base
  validates :creator_id, :title, :location, presence: true
  has_attached_file :image, default_url: "FLAG-1.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

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

  has_many(
    :attenders,
    through: :rsvps,
    source: :member
  )

  belongs_to(
    :group,
    class_name: "Group",
    primary_key: :id,
    foreign_key: :group_id
  )

  def number_rsvps
    rsvps.count
  end
end
