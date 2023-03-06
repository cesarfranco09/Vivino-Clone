# == Schema Information
#
# Table name: wines
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  type       :string           not null
#  grape      :string           not null
#  region     :string           not null
#  country    :string           not null
#  price      :float            not null
#  year       :integer          not null
#  image      :string           not null
#  winery     :string           not null
#  bold       :integer          not null
#  tannic     :integer          not null
#  sweet      :integer          not null
#  acidic     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Wine < ApplicationRecord
    validates :name, :type, :grape, :region, :country, :price, :year, :image, :winery, :bold, :tannic, :sweet, :acidic, presence: true

    has_many :ratings, dependent: :destroy
    has_many :cart_wines, dependent: :destroy
    has_many :wishlists, dependent: :destroy
    has_many :users, through: :wishlists, dependent: :destroy

    scope :by_type, -> (type) { where("type ILIKE ?", "%#{type}%") }
    scope :by_grape, -> (grape) { where("grape ILIKE ?", "%#{grape}%") }
    scope :by_region, -> (region) { where("region ILIKE ?", "%#{region}%") }
    scope :by_country, -> (country) { where("country ILIKE ?", "%#{country}%") }
    scope :by_price, -> (price) { where(price: price) }
    scope :by_year, -> (year) { where(year: year) }
    scope :by_winery, -> (winery) { where("winery ILIKE ?", "%#{winery}%") }

end


  