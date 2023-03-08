json.array! @wishlists do |wishlist|
    json.extract! wishlist, :id, :created_at, :updated_at
    json.user do
      json.extract! wishlist.user, :id, :email, :name, :created_at, :updated_at
    end
    json.wine do
      json.extract! wishlist.wine, :id, :name, :grape, :region, :country, :price, :year, :image, :winery, :bold, :tannic, :sweet, :acidic, :wine_type, :created_at, :updated_at
    end
end
  