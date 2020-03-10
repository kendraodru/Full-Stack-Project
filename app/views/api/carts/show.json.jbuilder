json.cart do
    # json.set! @cart.id do
        json.extract! @cart, :id, :user_id
    # end
end

json.products do 
    @products.each do |product|
        json.partial! 'api/products/product', product: product 
    end
end

json.cart_items do 
    @cart_items.each do |cart_item|
        # json.partial! 'api/cart_items/cart_item', cart_item: cart_item
        # this partical just returned a pojo {id:1,produ:2}
        json.set! cart_item.id do
            json.id cart_item.id
            json.cart_id cart_item.cart_id
            json.product_id cart_item.product_id
            json.quantity cart_item.quantity
        end
    end
end


# 