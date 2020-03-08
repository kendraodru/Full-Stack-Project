import {
RECEIVE_CURRENT_USER,
LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullSession = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullSession, action) =>{
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return Object.assign({}, {id: action.currentUser.id});
            // return action.currentUser.id;
            // debugger
            // return { id: action.currentUser.id}
            // return action.currentUser
            return {id: Object.keys(action.currentUser)[0]}
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    };
};

export default sessionReducer;
