import React from 'react';
import BootstrapInput from './Selects'

import '../style.css'

export const Login = ({
  error,
  country,
  phoneNumber,
  handleChange,
  handleBlur,
  handleChangeInputPhoneNumber
}) => (
    <div className="login_wrap">
      <div className="login_container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
          <h1>Sign in</h1>
          <p>
            Please choose your country and enter your full phone
            number.
        </p>
        </div>
        <BootstrapInput
          error={error}
          country={country}
          phoneNumber={phoneNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleChangeInputPhoneNumber={handleChangeInputPhoneNumber}
        />
      </div>
    </div>);

export default Login
