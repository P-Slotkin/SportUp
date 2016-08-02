class Api::UsersController < ApplicationController

  def create
    puts "!!!!!!!!!!!!!!!!!!!!!!"
    puts user_params
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
