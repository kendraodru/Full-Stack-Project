import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (state = {}, action) =>{
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
        //     const nextState = Object.assign(
        //         {}, 
        //         state, 
        //          {[action.currentUser.id]: action.currentUser}
        //     );
        // return nextState;
            // const nextState = Object.assign({}, state)
            // nextState[action.currentUser.id] = action.currentUser
            // console.log(action.payload)
            // return Object.assign( {}, action.payload);
            // return nextState
        return { [action.payload.users.id]: action.payload.users}
        default:
            return state;
    }
};

export default usersReducer;