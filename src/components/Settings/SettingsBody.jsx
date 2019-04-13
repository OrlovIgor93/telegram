import React from 'react';

import {style} from "../LeraStyles/style";
import {ProfileInfo} from "./ProfileInfo";
import {NotifySettings} from "./NotifySettings";
import {UserOptions} from "./UserOptions";

export const SettingsBody = () => (
    <div style={style.bodyBackground}>
        <ProfileInfo/>
        <UserOptions/>
        <NotifySettings/>
    </div>
);