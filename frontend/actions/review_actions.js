import * as reviewAPIUtil from '../util/reviews_api_util';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"

export const receiveReview = (review) =>({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviewErrors = (errors) =>({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const postReview = (review) => (dispatch) =>{
    reviewAPIUtil.postReview(review)
    .then(review => (dispatch(receiveReview(review))),
    errors => (dispatch(receiveReviewErrors(errors.responseJSON)))
    )
}