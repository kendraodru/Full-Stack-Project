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
        # debugger
        @cart_items = current_user.cart.cart_items
        render 'api/cart_items/index'
    end
#why do i not have access to current user for my update and destroy???
    def update
        # debugger
        # @user = current_user
        @cart_item = CartItem.find_by(id:params[:id])
        # cart = Cart.find_by(id: @cart_item.cart_id)
        if @cart_item.update(cart_item_params) 
            # debugger
            render 'api/cart_items/show'
        else
            render json: @cart_item.errors.full_messages, status: 404
        end
    end

    def destroy
        # debugger
        @cart_item = CartItem.find_by(id:params[:id])
        # @cart = Cart.find_by(id: @cart_item.cart_id)
        # if @cart.user_id == current_user.id
        @cart_item.destroy
        render json: ["item removed"]
        # else
        #     render json: ["Please log in to the proper account to delete item"]
        # end
    end

    private
    def cart_item_params
        params.require(:cartItem).permit(:cart_id,:product_id, :quantity)
        # this should be snakecased
    end
end
