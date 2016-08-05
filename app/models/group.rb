class Group < ActiveRecord::Base
  validates :title, :location, :creator_id, presence: true
  has_attached_file :image, default_url: "soccer-ball.jpg"
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

end
