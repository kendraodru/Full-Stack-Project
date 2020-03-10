# think about this later, this should be Camel cased cartItems
json.cart_items do 
    json.partial! 'api/cart_items/cart_item', cart_item: @cart_item
end
