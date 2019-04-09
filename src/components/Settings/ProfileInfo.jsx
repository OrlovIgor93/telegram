import React from 'react';
import {LeraStyle} from "../LeraStyles/styles";

export const ProfileInfo = () => (
    <div style={LeraStyle.BodyMargins}>
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