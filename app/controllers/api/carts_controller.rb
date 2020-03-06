class Api::CartsController < ApplicationController

    def create
        @cart = Cart.new(cart_params)
        render 'api/carts/show'
    end

    def show
        @cart = Cart.find_by(id:params[:id])
        render 'api/carts/show'
    end

    def cart_params
        params.require(cart).permit(:user_id)
    end
end
