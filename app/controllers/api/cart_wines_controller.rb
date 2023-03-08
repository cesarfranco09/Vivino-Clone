class Api::CartWinesController < ApplicationController

    before_action :set_cart_wine, only: [:show, :update, :destroy]
    skip_before_action :verify_authenticity_token

    def index
        @cart_wines = CartWine.all
        render: index
    end
    
    def show
        render: show
    end
    
    def create
        @cart_wine = CartWine.new(cart_wine_params)
    
        if @cart_wine.save
            render: show
        else
            render json: @cart_wine.errors, status: :unprocessable_entity
        end
    end
    
    def update
        if @cart_wine.update(cart_wine_params)
            render: show
        else
            render json: @cart_wine.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        @cart_wine.destroy
    end
    
    private
    def set_cart_wine
        @cart_wine = CartWine.find(params[:id])
    end

    def cart_wine_params
        params.require(:cart_wine).permit(:wine_id, :user_id, :quantity)
    end
   
end
