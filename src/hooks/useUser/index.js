import { useEffect, useReducer } from "react";
import { INITIALISING_USER, LOG_IN_SUCCESS, LOG_OUT_USER } from "../../constants";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../../api/firebase";
import { initialisingUser, loginSuccess, logOutSuccess } from "../../actions/actionCreatorUser";

const initialState = {
    initialisingUser: true,
    authenticated: false,
    user: null,
};

const reducer = (state, { type, authData }) => {
    switch (type) {
        case LOG_IN_SUCCESS:
            return {
                initialisingUser: false,
                authenticated: true,
                user: authData,
            };

        case LOG_OUT_USER:
            return {
                ...state,
                initialisingUser: false,
                authenticated: false,
            };
        case INITIALISING_USER:
            return {
                ...state,
                initialisingUser: true,
                authenticated: false,
            };
        case "new_login":
            return {
                ...state,
                initialisingUser: false
            };
        default:
            return state;
    }
};

export const useUser = () => {
    const [userState, dispatchUser] = useReducer(reducer, initialState);

    const { initialising, user } = useAuthState(firebase.auth);

    useEffect(() => {
            if (initialising) {
                dispatchUser(initialisingUser())
            } else if (user && user.displayName) {
                dispatchUser(loginSuccess(user))
            } else {
                dispatchUser({ type: "new_login" })
            }

        }, [user, initialising]
    );

    return {
        ...userState, dispatchUser
    };

};
