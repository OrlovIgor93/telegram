import React from 'react';

import '../style.css'

export const Login = () => (
    <div className="login_wrap">
        <div className="login_container">
            <h1>Sign in</h1>
            <p>
                Please choose your country and enter your full phone
                number.
                 </p>
            <select className="country_input">
                <option>Belarus</option>
                <option>Neverland</option>
                <option>Russia</option>
            </select>
            <div className="input_number_login">
                <input className="code_input" defaultValue={'+375'} />
                <input type="number" className="telephone_input" />
            </div>
        </div>
    </div>);