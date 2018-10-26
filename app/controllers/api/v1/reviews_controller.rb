class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}
  before_action :authorize_user, except: [:index, :show]

  def index
    render json: Review.all
  end

  def show
    render json: Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    @venue = Venue.find(params[:venue_id])
    @review.venue = @venue
    @review.user = current_user
    if @review.save
      render json: {review: @review}
    else
      render json: {error: @review.errors.full_messages}
    end

  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: { message: "Review deleted successfully" }
  end

  private

  def review_params
    params.require(:review).permit(:venue_id, :user_id, :vote_count, :rating, :description)
  end

  def authorize_user
    if !user_signed_in? || !current_user
      render json: {message: "you are not authorized!"}
    end
  end

end
