import React from 'react'
import Button from '@material-ui/core/Button/Button'

import '../style.css'

export const Header = ({ error, handleLoginStep }) => (
    <div className="title_login">
        <div className="img_wrap">
            <img
                className="title_login_img"
                alt="logo"
                src="https://web.telegram.org/img/Telegram72.png"
            />
        </div>
        <div className="name_title">Telegram</div>
        <div id="recaptcha-container" className="next_login" />
            <Button disabled={error} style={{ color: "white" }} onClick={handleLoginStep}  >


                    Next &gt;

            </Button>

    </div>
);
