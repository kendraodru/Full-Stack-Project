json.cart do
    json.set! @cart.id do
        json.extract! @cart, :id, :user_id
    end
end

json.products do 
    @products.each do |product|
        json.partial! 'api/products/product', product: product 
    end
end

json.cart_items do 
    @cart_items.each do |cart_item|
        json.partial! 'api/cart_items/cart_item', cart_item: cart_item
    end
end
