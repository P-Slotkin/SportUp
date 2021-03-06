# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  body       :string
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base

  belongs_to(
    :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id
  )

  belongs_to(
    :event,
    class_name: "Event",
    primary_key: :id,
    foreign_key: :event_id
  )
end
