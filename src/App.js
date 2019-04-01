import React, { Component } from 'react';
import WrapPage from './contaniers/wrapPage'
import AboutPage from './components/about/about'
import LoginPage from './components/login/loginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutPage />
      </div>
    );
  }
}

export default App;
