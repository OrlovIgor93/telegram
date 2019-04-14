import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import { User } from './components/User'
import { Profile } from './components/MyProfile'
import { MainPage } from './components/MainPage'
import { About } from './components/About'
import { Contacts } from "./components/Contacts"
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
        <Route path="/contacts" component={Contacts} />
        <Route path="/login" component={LoginPage} />
        <Route path="/group" component={GroupPage} />
        <Route path="/settings" component={Settings} />
        <Route path="/profile" component={Profile}/>
      </Switch>
    );
  }
}

export default App;
