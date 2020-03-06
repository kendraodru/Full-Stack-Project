# json.extract! @cart,
# :user_id

# # json.cart
# #     json.set! cart.id do 

# # end


# json.products do
#     @cart.products.each |product|
#     json.set! product.id 
#         json.extract! product,  :id, :name, :price, :size, :description
#     end
# end