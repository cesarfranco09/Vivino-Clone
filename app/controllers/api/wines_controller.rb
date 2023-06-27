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
    #         .select('ratings.id, body, rating, name, ratings.created_at, user_id, wine_id, ratings.updated_at')
    #         return render json: @wines
    #     elsif (params[:user_id])
    #         @ratings = Rating.joins(:wine).where(user_id: current_user.id)
    #         .select('wine_id, user_id, year, image, name, ratings.id, body, rating, ratings.created_at, ratings.updated_at')
    #         return render json: @ratings
    #     else
    #         @ratings = Rating.all
    #         return render json: @ratings
    #     end
    # end

end
