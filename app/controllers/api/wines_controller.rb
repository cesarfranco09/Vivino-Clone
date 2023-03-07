class Api::WinesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def wine_by_filter
        filter = params[:filter]
        wine_types = filter[:wine_types].map{|ele| ele.downcase}
        wines = Wine.where(wine_type: wine_types)
        render json: { wines: wines }
    end 

end
