# debugger

json.users do
    json.partial! 'api/users/user', user:@user
end

# json.cart do
#     # json.set! @cart.id do
#         json.extract! @cart, :id, :user_id
#     # end
# end
json.cart do
    json.partial! 'api/carts/cart', cart: @cart
end

json.cartItems do 
    @cart.cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :cart_id, :product_id, :quantity
        end
    end
end

