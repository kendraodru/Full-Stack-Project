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
        @products = @cart.products || []
        @cart_items = @cart.cart_items || []

        # tempProduct = Product.find_by(
        #     name: "Complementary Travel Sized Kale Super Cleanser"
        #     )

        # if (@products.empty?)
        #     @cart_items = CartItem.create({
        #         cart_id: @cart.id,
        #         product_id: tempProduct.id
        #     })

        #     @products = @cart.products
        # end
        render 'api/carts/show'
    end

    # for when a customer completes a purchase, clear cart
    def update
        @cart = current_user.cart
        @cart_items = @cart.cart_items
        @products = []
        @cart_items.each do |item|
            item.destroy
        end
        @cart.save
        render :show
    end

    def cart_params
        params.require(:cart).permit(:user_id)
    end
end
