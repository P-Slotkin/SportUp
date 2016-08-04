class Membership < ActiveRecord::Base

  belongs_to(
    :member,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id
  )

  belongs_to(
    :group,
    class_name: "Group",
    primary_key: :id,
    foreign_key: :group_id
  )
end
