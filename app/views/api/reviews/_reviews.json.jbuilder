@reviews.each do |review|
    # json.extract! review, :id, :user_id, :product_id, :title, :body, :rating
    json.set! review.id do
        json.id review.id
        json.user_id review.user_id
        json.product_id review.product_id
        json.title review.title
        json.body review.body
        json.rating review.rating
    end

end