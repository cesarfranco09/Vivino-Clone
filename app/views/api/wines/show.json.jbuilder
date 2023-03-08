json.wine do
    json.extract! @wine, :id, :name, :grape, :region, :country, :price, :year, :image, :winery, :bold, :tannic, :sweet, :acidic, :wine_type, :created_at, :updated_at
end
  