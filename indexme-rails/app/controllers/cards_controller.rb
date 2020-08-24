class CardsController < ApplicationController
    def index
      cards = Card.all
      
      render json: cards
    end
  
    def create
      card = Card.new(card_params)
      if card.save
        render json: card
      end
    end
    
    def show
      card = Card.find(params[:id])
      render json: card
    end
    
    def destroy
      card = Card.find(params[:id]).destroy
      render json: {cardId: card.id}
    end
    
    private
    def card_params
      params.require(:card).permit(:title, :front, :back)
    end
  end
  