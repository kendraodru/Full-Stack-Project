class Api::CartsController < ApplicationController

    # def create
    #     @cart = Cart.new(cart_params)
    #     if @cart.save
    #         render 'api/carts/show'
    #     else
    #         render json: @cart.errors.full_messages, status: 422
    #     end
    # end

    def show
        @cart = current_user.cart
        @products = @cart.products
        @cart_items = @cart.cart_items
        render 'api/carts/show'
    end

    def cart_params
        params.require(:cart).permit(:user_id)
    end
end
