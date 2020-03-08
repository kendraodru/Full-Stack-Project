
    json.set! cart_item.id do
        json.id cart_item.id
        json.cart_id cart_item.cart_id
        json.product_id cart_item.product_id
        json.quantity cart_item.quantity
    end

# json.set! cart_item.id do
#     # json.extract! cart_item, :id, :cart_id, :product_id, :quantity
#     json.id cart_item
# end
