
# Youth To The People Clone
### [Live Demo](https://youth-to-the-people.herokuapp.com/#/ "Live Demo of Youth To The People clone")

## Summary: 

This project is a high quality duplication of youthtothepeople.com, a minimalistic and modern ecommerce website. The application is 
writting using React/Redux in the frontend, and Ruby on Rails in the backend with Postgresql. It currently has user auth, products,and cart functionality. 

# Key Features:

### User Auth:
User can login, sign up, and use a demo account. User information is secured using strong parameters in the controller and salting and hashing user passwords. The login and sign up pages are protected via auth-routes created in the frontend. Once loggedin, the user's session is kept track of using session tokens. The session tokens are then cleared once the user logs out. 
``` ruby
class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            @cart = Cart.find_by(user_id: @user.id)
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
```

### Products
The product tables were designed for scalability in the relational database. This allows for features such as adding, updating, or removing products possible without dropping the database. Through frontend AJAX calls, users can view the product index or a single product using params. 
``` ruby
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
        render :show
    end
end 
```

### Cart
A single cart belongs to a user and the cart is fetched once the user logs in. If it is a new account a new cart will be created. Products are associated with the user's cart through the cartItems. The cartItems joins table is designed to hold the productId and quanity of the associated product in the cart. Efficient querying allowed all the information to be fetched in one AJAX call. 
``` ruby
  def show
        @cart = current_user.cart
        @products = @cart.products || []
        @cart_items = @cart.cart_items || []
        render 'api/carts/show'
    end

    def cart_params
        params.require(:cart).permit(:user_id)
    end
```

### Search
The search feature is based on the product name and results are updated based on the user's input.
