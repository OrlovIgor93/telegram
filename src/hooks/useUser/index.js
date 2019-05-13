import { useReducer} from 'react';
import { LOG_IN_SUCCESS, LOG_OUT_USER } from "../../constants";

const initialState={
    authenticated: false,
    user: {},
};

const reducer = (state, {type,authData }) => {
    switch (type) {
        case LOG_IN_SUCCESS:
            return {
                authenticated: true,
                user:authData,
            };
        case LOG_OUT_USER:
            return {
                authenticated: false,
                user:{},
            };
        default:
            throw new Error();
    }
};

export const useUser = () => {
    const [user, dispatchUser] = useReducer(reducer, initialState);


    return {
        ...user, dispatchUser
    };

};
