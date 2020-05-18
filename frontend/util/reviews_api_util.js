export const postReview = (review) =>(
    $.ajax({
        url: '/api/reviews',
        method:'POST',
        data: { review }
    })
)

