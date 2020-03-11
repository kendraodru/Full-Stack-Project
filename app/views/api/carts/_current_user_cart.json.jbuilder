
json.cart do
    json.extract! cart, :id, :user_id
end

json.cartItems do 
    cart.cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :cart_id, :product_id, :quantity
        end
    end
end
