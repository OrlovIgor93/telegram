import React, { Component } from 'react';
import LoginPage from './components/login/loginPage'
import { MainPage } from './components/MainPage'
import AboutPage from './components/about/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
