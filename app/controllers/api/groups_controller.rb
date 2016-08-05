class Api::GroupsController < ApplicationController
  before_action :require_signed_in!, only: [:create, :update, :destroy]

  def index
    @groups = Group.all
    render :index
  end


  def show
    @group = Group.find(params[:id])
  end

  def create
    @group = Group.new(group_params)
    @group.creator_id = current_user.id
    if @group.save
      Membership.create({user_id: @group.creator_id, group_id: @group.id})
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])

    if @group.update(group_params)
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])

    if @group.destroy
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  private

  def group_params
    params.require(:data).permit(:title, :category, :location, :description, :creator_id, :picture)
  end

end
