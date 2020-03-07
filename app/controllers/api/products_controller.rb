class Api::ProductsController < ApplicationController

    def index

        if params.has_key?(:cart_id)
            cart = Cart.find_by(id: params[:cart_id])
            # i want to me making sure the cart is the current users cart
            if current_user.id == cart.user_id
                @products = cart.products
            else
                @products = []
            end

        else
            @products = Product.all
        end
        render :index
    end

    def show
        @product = Product.find_by(id: params[:id])
        render :show
    end
end
