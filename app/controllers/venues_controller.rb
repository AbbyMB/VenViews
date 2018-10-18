class VenuesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    @venues = Venue.all
  end

  def show
    @venue = Venue.find(params[:id])
  end

  protected
  def authorize_user
    if !user_signed_in? || !current_user
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
