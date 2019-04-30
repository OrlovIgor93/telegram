import React, { Component } from "react";
import { Header } from "./ComponentsLogin/Header.jsx";
import { Login } from "./ComponentsLogin/Login.jsx";
import { LearnMore } from "./ComponentsLogin/LearnMore.jsx";
import "./style.css";

export const Wrap = props => (
  <div className="head_login">
    <div className="wrap_login">
      {props.children}
    </div>
  </div>
);

export class LoginPage extends Component {
  state = {
    error: 'true',
    errorMessage: '',
    country: '',
    phoneNumber: '',
  };

  handleChange = event => {
    this.setState({ country: event.target.value, phoneNumber: '' });
  };

  handleBlur = () => {
    if (this.state.country.phoneLength > this.state.phoneNumber.length) {
      this.setState({error: true});
      this.setState({ errorMessage: `Введите еще  ${this.state.country.phoneLength - this.state.phoneNumber.length}  символов`})
    }
  }

  handleChangeInputPhoneNumber = event => {
    if (event.target.value.length > this.state.country.phoneLength) {
      this.setState({error: true});
      this.setState({ errorMessage: `Длина должна быть не больше  ${this.state.country.phoneLength} символов` })
    } else {
      this.setState({error: false});
      this.setState({ errorMessage: '' })
    }
    this.setState({ phoneNumber: event.target.value })
  }

  render() {
    return (
      <Wrap>
        <Header
          error={this.state.error}
          phoneNumber={`${this.state.country.code} ${this.state.phoneNumber}`} />
        <Login
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          country={this.state.country}
          phoneNumber={this.state.phoneNumber}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          handleChangeInputPhoneNumber={this.handleChangeInputPhoneNumber}
        />
        <LearnMore />
      </Wrap>
    )
  }
}
