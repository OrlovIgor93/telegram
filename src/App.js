import React, { Component } from 'react';

import {  Switch, Route } from "react-router-dom";

import { Contact } from './components/Contact'
import { MainPage } from './components/MainPage'
import AboutPage from './components/about/about'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default App;
