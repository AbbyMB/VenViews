class Api::V1::VenuesController < ApplicationController
  def index
    render json: Venue.all
  end 
end
