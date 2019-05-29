import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { StoreContext } from "../store";
import { Spinner } from "../components/common/Spinner";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { initialisingUser, authenticated, user } = useContext(StoreContext);


    if (initialisingUser) {
        return <Spinner/>
    }

    return (
        <Route
            {...rest}
            render={renderProps => {
                return (authenticated && user) ? (
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