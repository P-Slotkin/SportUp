class Api::EventsController < ApplicationController
  before_action :require_signed_in!, only: [:create, :update, :destroy]

  def index
    @events = Event.all
    render :index
  end


  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    @event.creator_id = current_user.id
    if @event.save
      Rsvp.create({user_id: @event.creator_id, event_id: @event.id})
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])

    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])

    if @event.destroy
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  private

  def event_params
    params.require(:data).permit(:title, :location, :description, :creator_id, :image_url, :members, :rsvps, :group_id)
  end

end
