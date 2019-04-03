import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import { Contact } from './components/Contact'
import { MainPage } from './components/MainPage'
import { About } from './components/About'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default App;
