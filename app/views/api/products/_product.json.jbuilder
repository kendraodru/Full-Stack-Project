
    json.set! product.id do
        json.id product.id
        json.name product.name
        json.description product.description
        json.instructions product.instructions
        json.ingredients product.ingredients
        json.price product.price
        json.size product.size

         if product.photos.attached?
            json.photoUrls product.photos.map { |file| url_for(file) }  
        end
    end


# json.extract! product,
# :id,
# :name,
# :description,
# :instructions,
# :ingredients, 
# :price,
# :size
