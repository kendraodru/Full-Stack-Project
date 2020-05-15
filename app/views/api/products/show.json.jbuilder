json.products do
    json.partial! 'api/products/product', product: @product
end


json.reviews do
    json.partial! 'api/reviews/reviews', reviews: @reviews
end
# added this

# for the photourls
# if @product.photos.attached?
#     json.photoUrls @product.photos.map { |file| url_for(file) }  
# end