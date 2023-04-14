class Api::RatingsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if (params[:wine_id])
      @ratings = Rating.where(wine_id: params[:wine_id])
      return render json: @ratings
    elsif (params[:user_id])
      @ratings = Rating.joins(:wine).where(user_id: current_user.id)
        .select('wine_id, year, image, name, ratings.id, body, rating, ratings.created_at')
      return render json: @ratings
    else
      @ratings = Rating.all
      return render json: @ratings
    end
  end

  def show 
    @rating = Rating.find_by(id: params[:id])
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