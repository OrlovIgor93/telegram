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
        error: false,
        value: "",
    };

    changePhoneNumber = e => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value,
            error: e.target.value.length > 5
        });
    };

    render() {
        return (
            <Wrap>
                <Header error={this.state.error} number={this.state.value}/>
                <Login value={this.state.value} changePhoneNumber={this.changePhoneNumber}/>
                <LearnMore />
            </Wrap>
        )
    }
}
