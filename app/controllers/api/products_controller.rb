class Api::ProductsController < ApplicationController

    def index
        if params.has_key?(:cart_id)
            cart = Cart.find_by(id: params[:cart_id])
            if current_user.id == cart.user_id
                @products = cart.products.with_attached_photos
            else
                @products = []
            end

        else
            @products = Product.with_attached_photos.all
        end
        render :index
    end

    def show
        @product = Product.find_by(id: params[:id])
        @reviews = @product.reviews
        render :show
    end
end
