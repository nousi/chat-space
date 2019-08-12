class MessagesController < ApplicationController
  before_action :set_group, only: [:index,:create]
  def index
    @message = Messges.new
    @messages = @group.messages
  end
  
  def create
  end

  private
  def set_group
    @group = Group.find(params[:group_id])
  end
end
