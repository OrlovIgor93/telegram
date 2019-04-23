import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button/Button'

import '../style.css'

export const Header = ({ error, phoneNumber }) => (
  <div className="title_login">
    <div className="img_wrap">
      <img className="title_login_img" alt="logo" src="https://web.telegram.org/img/Telegram72.png" />
    </div>
    <div className="name_title">Telegram</div>
    <div className="next_login">
      <Button disabled={error} onClick={() => localStorage.setItem("number", phoneNumber)}>
        <Link className="next_wrap_login" style={{ color: 'white' }} to="/home">
          Next &gt;
             </Link>
      </Button>
    </div>
  </div>
);
