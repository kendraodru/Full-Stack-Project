class Api::CartItemsController < ApplicationController

    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render 'api/cart_items/show'
        else
            render json: @cart_item.errors.full_messages, status: 404
        end
    end

    def index
        @items = current_user.cart.cart_items
        render 'api/cart_items/index'
    end

    def destroy
        @cart_item = CartItem.find_by(id:params[i])
        @cart_item.destroy
        render json: ["item removed"]
    end

    private
    def cart_item_params
        params.require(:cartitems).permit(:cart_id,:product_id, :quantity)
    end
end
