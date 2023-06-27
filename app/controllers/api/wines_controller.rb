class Api::WinesController < ApplicationController
    
    skip_before_action :verify_authenticity_token

    def index
        @wines = Wine.all
        render json: @wines
    end

    def show
        @wine = Wine.find(params[:id])
        render json: @wine
    end

    def wine_by_filter
        filter = params[:filter]
        wine_types = filter[:wine_types].map {|ele| ele.downcase}
        wines = Wine.where(wine_type: wine_types)
        render json: { wines: wines }
    end 

    # def index
    #     if (params[:wine_type])
    #         @wines = Wine.where(wine_type: params[:wine_type])
    #         return render json: @wines
    #     elsif (params[:region])
    #         @wines = Wine.where(region: params[:region])
    #         return render json: @wines
    #     else
    #         @wines = Wine.all
    #         return render json: @wines
    #     end
    # end

end
