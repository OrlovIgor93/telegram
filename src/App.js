import React from "react";
import { Switch, Route } from "react-router-dom";

import { MainPage } from "./components/MainPage"
import { LoginPage } from "./components/Login";
import { PrivateRoute } from "./requireAuth/requireAuth"

export const App = () => (
    <Switch>
        <Route exact path="/login" component={LoginPage}/>
        <PrivateRoute path="/" component={MainPage}/>
    </Switch>
);






