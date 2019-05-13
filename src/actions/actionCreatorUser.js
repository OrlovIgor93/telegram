
import { LOG_IN_SUCCESS, LOG_OUT_USER, AUTH_ERROR } from "../constants";

export function loginSuccess(user) {
    return { type: LOG_IN_SUCCESS, authData: user }
}

export function logOutSuccess() {
    return { type: LOG_OUT_USER }
}

export function authError(errorMessage) {
    return { type: AUTH_ERROR, error: errorMessage  }
}



// export function logOutUser(){
//     return function(dispatch){
//         firebase.auth().signOut().then(function() {
//             // Sign-out successful.
//             dispatch(logOutSuccess());
//         }).catch(function(error) {
//             // An error happened.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             dispatch(authError(errorMessage));
//         });
//     }
// }