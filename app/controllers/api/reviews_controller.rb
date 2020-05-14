class Api::ReviewsController < ApplicationController

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: ["error"]
        end
        
    end


    def update


    end


    def destory


    end

    def review_params
        params.require(:review).permit(:user_id, :product_id, :title, :body, :rating)
    end
end
