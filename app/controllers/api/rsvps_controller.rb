class Api::RsvpsController < ApplicationController

  def index
    @rsvps = Rsvp.all
    render :index
  end

  def create
    @rsvp = Rsvp.new(rsvp_params)
    if @rsvp.save
      render :show
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  def destroy
    @rsvp = Rsvp.find(params[:id])

    if @rsvp.destroy
      render :show
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end






  private

  def rsvp_params
    params.require(:data).permit(:user_id, :event_id)
  end

end
