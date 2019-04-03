import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import { Contact } from './components/Contact'
import { MainPage } from './components/MainPage'
import { About } from './components/About'
import { GroupPage } from "./components/Group"
import { Contacts } from './components/Contacts'
import { LoginPage } from "./components/Login";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginPage} />
        <Route path="/group" component={GroupPage} />
        <Route path="/contacs" component={Contacts} />
      </Switch>
    );
  }
}

export default App;
