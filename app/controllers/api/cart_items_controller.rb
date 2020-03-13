class Api::CartItemsController < ApplicationController

    def create
        
        debugger
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save
            render 'api/cart_items/show'
        else
            render json: @cart_item.errors.full_messages, status: 404
        end
    end

    def index
        @cart_items = current_user.cart.cart_items
        render 'api/cart_items/index'
    end

    def update
        @cart_item = CartItem.find_by(id:params[:id])
        if @cart_item.update(cart_item_params) 
            render 'api/cart_items/show'
        else
            render json: @cart_item.errors.full_messages, status: 404
        end
    end

    def destroy
        @cart_item = CartItem.find_by(id:params[:id])
        @cart_item.destroy
        render json: ["item removed"]
    end

    private
    def cart_item_params
        params.require(:cartItem).permit(:cart_id,:product_id, :quantity)
        # this should be snakecased
    end
end
