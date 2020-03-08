import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // const nextState = Object.assign(
            //     {}, 
            //     state, 
            //     { [action.currentUser.id]: action.currentUser }
            // );
        // return nextState;
            return action.currentUser;
    
        default:
            return state;
    }
};

export default usersReducer;