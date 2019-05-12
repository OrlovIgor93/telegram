import { useReducer} from 'react';
import { LOG_IN_SUCCESS } from "../../constants";

const initialState={
    authenticated: false,
    user: {},
};

const reducer = (state, {type,authData }) => {
    switch (type) {
        case LOG_IN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user:authData,
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
