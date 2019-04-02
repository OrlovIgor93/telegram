import React, { Component } from 'react';
import LoginPage from './components/login/loginPage'
import WrapPage from './contaniers/wrapPage'
import AboutPage from './components/about/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WrapPage />
      </div>
    );
  }
}

export default App;
