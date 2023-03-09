class Api::RatingsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user_id = params[:user_id] || current_user.index

    if (params[:user_id])
      @ratings = Rating.includes(:user, :wine).where(user_id: params[:user_id])
    else
      @ratings = Rating.includes(:user, :wine).where(wine_id: params[:wine_id])
    end
  end

  def create
    @rating = Wine.find(params[:wine_id]).ratings.new(rating_params)
    @rating.user_id = current_user.id 

    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def update
    @rating = Rating.find_by(id: params[:id])

    unless @rating.user_id == current_user.id || current_user.id == 1
      render json: ['You can only edit your own ratings'], status: 403
    else
      if @rating.update!(rating_params)
        render :show
      else
        render json: @rating.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    rating = Rating.find_by(id: params[:id])
    if rating && (rating.user_id == current_user.id || current_user.id == 1)
      render json: { ratingId: params[:id] }
      rating.destroy
    else
      render json: ['You can only delete your own ratings'], status: 403
    end
  end

  def show
    @rating = Rating.find(params[:id])
    render json: @rating
  end

  private

  def rating_params
    params.require(:rating).permit(:user_id, :wine_id, :rating, :body)
  end
 
end