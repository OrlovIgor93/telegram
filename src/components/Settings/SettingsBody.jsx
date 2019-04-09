import React from 'react';

import {LeraStyle} from "../LeraStyles/styles";
import {ProfileInfo} from "./ProfileInfo";
import {NotifySettings} from "./NotifySettings";
import {UserOptions} from "./UserOptions";

export const SettingsBody = () => (
    <div style={LeraStyle.BodyBackground}>
        <ProfileInfo/>
        <NotifySettings/>
        <UserOptions/>
    </div>
);