class Api::RatingsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    puts current_user
    user_id = params[:user_id] || current_user.index
    if (params[:user_id])
      @ratings = Rating.includes(:user, :wine).where(user_id: params[:user_id])
    else
      @rating = Rating.find(wine_id: params[:wine_id])
    end
    render json: @ratings
  end

  def show 
    if (params[:wine_id])
      @rating = Rating.where(wine_id: params[:wine_id])
    else 
      @rating = Rating.joins(:wine).where(user_id: current_user.id)
        .select('wine_id, image, name, body, rating, ratings.created_at')
    end

    render json: @rating
  end

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      render json: @rating
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
        render json: @rating
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

  private

  def rating_params
    params.require(:rating).permit(:user_id, :wine_id, :rating, :body)
  end
 
end