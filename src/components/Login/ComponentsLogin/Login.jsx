import React from 'react';

import '../style.css'

export const Login = () => (
    <div className="login_wrap">
        <div className="login_container">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20}}>
                <h1>Sign in</h1>
                <p>
                    Please choose your country and enter your full phone
                    number.
                </p>
            </div>
            <div className="input_number_login">
                <select className="country_input">
                    <option>Belarus</option>
                    <option>Neverland</option>
                    <option>Russia</option>
                </select>
                    <input className="code_input input_login" defaultValue={'+375'}/>
                    <input type="number" className="telephone_input input_login"/>
            </div>
        </div>
    </div>);
