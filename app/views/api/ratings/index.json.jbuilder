json.array! @ratings do |rating|
    json.extract! rating, :id, :rating, :body, :created_at, :updated_at
    json.user do
      json.extract! rating.user, :id, :email, :name, :created_at, :updated_at
    end
    json.wine do
      json.extract! rating.wine, :id, :name, :grape, :region, :country, :price, :year, :image, :winery, :bold, :tannic, :sweet, :acidic, :wine_type, :created_at, :updated_at
    end
end
  