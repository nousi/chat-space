require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save' do
      it 'is valid with text' do
        expect(bulid(:message, image: nil)).to be_valid
      end

      it 'is valid with image' do
        expect(bulid(:message, text: nil)).to be_valid
      end
    end

    context 'can not save'

      it 'is invalid without text and image' do
        message = bulid(:message, text: nil, image: nil)
        message.valid?
        expect(message.errors[:text]).to include('を入力してください')
      end

      it 'is invalid without group_id' do
        message = bulid(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group_id]).to include('を入力してください')
      end


      it 'is invalid without user_id' do
        message = bulid(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user_id])to include('を入力してください')
      end
    end
  end
end