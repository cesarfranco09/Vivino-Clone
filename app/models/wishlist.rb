# == Schema Information
#
# Table name: wishlists
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  wine_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Wishlist < ApplicationRecord
  validates :user_id, :wine_id, presence: true
  validates :user_id, uniqueness: { scope: :wine_id }
  
  belongs_to :user
  belongs_to :wine
end
