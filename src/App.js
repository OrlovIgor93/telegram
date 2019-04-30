import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import { MainPage } from './components/MainPage'
import { LoginPage } from "./components/Login";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />

        <Route path="/home" component={MainPage} />

      </Switch>
    );
  }
}

export default App;


