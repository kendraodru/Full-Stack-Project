
json.cart_items do
    @cart_items.each do |cart_item|
        # json.id cart_item.id do 
            json.partial! 'api/cart_items/cart_item', cart_item: cart_item
        # end
    end
end

# json.cart_items do

#         json.set! cart_item.id do 
#             json.partial! 'api/cart_items/cart_item', cart_item: cart_item

#     end
# end