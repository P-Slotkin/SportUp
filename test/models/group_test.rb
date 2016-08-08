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

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
