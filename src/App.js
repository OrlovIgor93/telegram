import React, { Component } from 'react';
import LoginPage from './components/login/loginPage'
import WrapPage from './contaniers/wrapPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WrapPage />
        <LoginPage />
      </div>
    );
  }
}

export default App;
