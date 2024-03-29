class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            @cart = Cart.find_by(user_id: @user.id)
            # @cart_items = @cart.cart_items
            render 'api/users/show'
        else
            render json: ["Invalid email/password combination"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render json: ["user is logged out"]
        else
           render json: ["login required"], status: 404
        end
    end
end
