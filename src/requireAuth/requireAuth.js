import React, { useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "../api/firebase";
import { StoreContext } from "../store";
import { loginSuccess } from "../actions/actionCreatorUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner } from "../components/common/Spinner";

export const PrivateRoute = (props) => {
    const { dispatchUser } = useContext(StoreContext);
    const { initialising, user } = useAuthState(firebase.auth);

    const { component: Component, ...rest } = props;

    useEffect(() => {
            if (user) {
                dispatchUser(loginSuccess(user))
            }
        }, [user,dispatchUser]
    );

    if (initialising) {
        return <Spinner/>
    }

    return (
        <Route
            {...rest}
            render={renderProps => {
                return user ? (
                    <Component {...renderProps} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: renderProps.location }
                        }}
                    />
                );
            }}
        />
    );
};