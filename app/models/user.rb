class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  has_attached_file :image, default_url: "default-profile.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # has_many :rsvps
  # has_many(
  #   :comments,
  #   class_name: "Comment",
  #   primary_key: :id,
  #   foreign_key: :author_id
  # )
  #
  # has_many(
  #   :created_events,
  #   class_name: "Event",
  #   primary_key: :id,
  #   foreign_key: :creator_id
  # )
  #
  # has_many(
  #   :created_groups,
  #   class_name: "Group",
  #   primary_key: :id,
  #   foreign_key: :creator_id
  # )
  #
  # has_many(
  #   :memberships,
  #   class_name: "Membership",
  #   primary_key: :id,
  #   foreign_key: :user_id
  # )
  #
  has_many(
    :groups,
    through: :memberships,
    source: :group
  )
  #
  # has_many(
  #   :rsvped_events,
  #   through: :rsvps,
  #   source: :events
  # )

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


end
