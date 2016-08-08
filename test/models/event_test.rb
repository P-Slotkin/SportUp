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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
