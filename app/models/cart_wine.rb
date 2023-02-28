# == Schema Information
#
# Table name: cart_wines
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  user_id    :bigint           not null
#  wine_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartWine < ApplicationRecord
  belongs_to :user
  belongs_to :wine
end
