import React from 'react';
import {style} from "../LeraStyles/style";

export const ProfileInfo = () => (
    <div style={style.bodyMargins}>
        <div>
            <div className="icon_phone"/>
                <p>Phone number</p>
            </div>
            <div>
                <div className="icon_user"/>
                <p>Username</p>
            </div>
        </div>
);