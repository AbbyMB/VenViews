class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: Review.all
  end

  def show
    render json: Review.find(params[:id])
  end

  def new
    @review = Review.new

  end

  def create
    # binding.pry
    @review = Review.new(review_params)
    @venue = Venue.find(params[:venue_id])
    @review.venue = @venue
    @review.user = current_user
    # @user =  current_user
    if @review.save
      render json: {review: @review}
    else
      render json: {error: @review.errors.full_messages}
    end
  end

  private
  def review_params
    params.require(:review).permit(:venue_id, :user_id, :vote_count, :rating, :description)
  end

end
