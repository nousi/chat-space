class MessagesController < ApplicationController
  before_action :set_group, only: [:index,:create]
  def index
  end
  
  def create
  end

  private
  def set_group
    @group = messages.group.find(params[:id])
  end
end
