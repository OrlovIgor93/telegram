import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import { User } from './components/User'
import { MainPage } from './components/MainPage'
import { About } from './components/About'
import { GroupPage } from "./components/Group"
import { LoginPage } from "./components/Login";
import { Settings } from "./components/Settings";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/contact" component={User} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage} />
        <Route path="/group" component={GroupPage} />
        <Route path="/settings" component={Settings} />
      </Switch>
    );
  }
}

export default App;
