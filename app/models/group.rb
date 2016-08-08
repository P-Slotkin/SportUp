# == Schema Information
#
# Table name: groups
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  location           :string           not null
#  description        :string
#  creator_id         :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  category           :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Group < ActiveRecord::Base
  validates :title, :location, :creator_id, presence: true
  has_attached_file :image, default_url: "stadium.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  belongs_to(
    :creator,
    class_name: "User",
    primary_key: :id,
    foreign_key: :creator_id
  )

  has_many(
    :memberships,
    class_name: "Membership",
    primary_key: :id,
    foreign_key: :group_id
  )

  has_many(
    :members,
    through: :memberships,
    source: :member
  )

  has_many(
    :events,
    class_name: "Event",
    primary_key: :id,
    foreign_key: :group_id
  )

end
