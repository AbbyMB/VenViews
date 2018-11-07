class Api::V1::CurrentUserController < ApplicationController

  before_action :authenticate_user!

  def index
  end

  def index
    render json: current_user
  end
end
