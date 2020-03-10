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