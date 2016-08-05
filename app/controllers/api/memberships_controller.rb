class Api::MembershipsController < ApplicationController

  def index
    @memberships = Membership.all
    render :index
  end

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find(params[:id])

    if @membership.destroy
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end






  private

  def membership_params
    params.require(:data).permit(:user_id, :group_id)
  end

end
