# == Schema Information
#
# Table name: ratings
#
#  id         :bigint           not null, primary key
#  rating     :float            not null
#  body       :string
#  user_id    :bigint           not null
#  wine_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Rating < ApplicationRecord
  validates :rating, :user_id, :wine_id, presence: true
  
  belongs_to :user
  belongs_to :wine
end
