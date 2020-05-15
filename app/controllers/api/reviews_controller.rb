class Api::ReviewsController < ApplicationController

    def create
        
        @review = current_user.reviews.new(review_params)
        
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end

    end

    def index
        
        render :index

    end


    def update


    end


    def destory


    end

    def review_params
        params.require(:review).permit(:product_id, :title, :body, :rating)
    end
end
