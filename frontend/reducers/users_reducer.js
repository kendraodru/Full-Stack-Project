import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (state = {}, action) =>{
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { [action.payload.users.id]: action.payload.users};
        default:
            return state;
    }
};

export default usersReducer;