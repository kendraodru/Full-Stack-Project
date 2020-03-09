import * as sessionAPIUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = (payload) =>({
    type: RECEIVE_CURRENT_USER,
    payload
})
// export const receiveCurrentUser = (currentUser) =>({
//     type: RECEIVE_CURRENT_USER,
//     currentUser
// })

export const logoutCurrentUser = () =>({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearSessionErrors = ()=>({
    type: CLEAR_SESSION_ERRORS
});

export const signup = (formUser) =>(dispatch) =>(
    sessionAPIUtil.postUser(formUser)
        .then((payload) => dispatch(receiveCurrentUser(payload)),
        err => (
        dispatch(receiveSessionErrors(err.responseJSON))
        ))
)
// export const signup = (formUser) =>(dispatch) =>(
//     sessionAPIUtil.postUser(formUser)
//         .then((user) => dispatch(receiveCurrentUser(user)),
//         err => (
//         dispatch(receiveSessionErrors(err.responseJSON))
//         ))
// )

export const login = (formUser) =>(dispatch) =>(
    sessionAPIUtil.postSession(formUser)
    // .then(payload => (console.log(payload)))
        .then((payload) => dispatch(receiveCurrentUser(payload)),
        err=>(
            dispatch(receiveSessionErrors(err.responseJSON))
        ))
)
// export const login = (formUser) =>(dispatch) =>(
//     sessionAPIUtil.postSession(formUser)
//     // .then(payload => (console.log(payload)))
//         .then((user) => dispatch(receiveCurrentUser(user)),
//         err=>(
//             dispatch(receiveSessionErrors(err.responseJSON))
//         ))
// )

export const logout = () => (dispatch) =>(
    sessionAPIUtil.deleteSession()
        .then((user) => dispatch(logoutCurrentUser()),
        err => (
        dispatch(receiveSessionErrors(err.responseJSON))
        ))
)
