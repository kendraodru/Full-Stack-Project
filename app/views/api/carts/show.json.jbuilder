json.set! @cart.id do
    json.extract! @cart, :id, :user_id
end

# json.cart_item do
    # @cart.cart_items.each do |cart_item|
    #     json.partial! 'api/cart_items/cart_item', cart_item: cart_item
    # end
# end