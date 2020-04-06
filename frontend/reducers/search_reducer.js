// case SEARCH_PRODUCTS:
// if (action.payload.products === undefined) {
//     return {}
// } else {
//     return action.payload.products
// }

import {SEARCH_PRODUCTS} from '../actions/search_action';

const searchReducer = (state={}, action) =>{
    Object.freeze(state);
    switch (action.type) {
        case SEARCH_PRODUCTS:
            if (action.payload.products === undefined) {
                return {}
            } else {
                return action.payload.products
            }
        default:
            return state;
    }
}

export default searchReducer;