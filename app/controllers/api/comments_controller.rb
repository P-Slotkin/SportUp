class Api::CommentsController < ApplicationController
  before_action :require_signed_in!, only: [:create, :update, :destroy]

  def index
    @comments = Comment.all
    render :index
  end


  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:data).permit(:id, :body, :author_id, :event_id)
  end

end
