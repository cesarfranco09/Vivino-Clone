json.array! @cart_wines do |cart_wine|
    json.extract! cart_wine, :id, :quantity, :created_at, :updated_at
    json.user do
      json.extract! cart_wine.user, :id, :email, :name, :created_at, :updated_at
    end
    json.wine do
      json.extract! cart_wine.wine, :id, :name, :grape, :region, :country, :price, :year, :image, :winery, :bold, :tannic, :sweet, :acidic, :wine_type, :created_at, :updated_at
    end
end
  