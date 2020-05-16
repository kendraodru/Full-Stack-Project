class Api::ReviewsController < ApplicationController

    def create
        
        @review = current_user.reviews.new(review_params)
        
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end

    end
  

    def destroy
        
        @review = Review.find_by(id: params[:id])

        if (current_user.reviews.includes(@review))
            @review.delete
            render json: @review
        else
            render json: ['Error, invalid credentials']
        end
        
    end

    private
    def review_params
        params.require(:review).permit(:product_id, :title, :body, :rating)
    end
end
