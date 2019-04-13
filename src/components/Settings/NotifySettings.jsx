import React from 'react';
import Switches from "../Settings/Switches";

export const SettingsItem = ({title}) => (
    <div className="box">
        <div>
            <p>{title}</p>
        </div>
        <Switches/>
    </div>
);
export const NotifySettings = () => (
    <div>
        <SettingsItem title="Dark theme"/>
        <SettingsItem title="Bright theme"/>
    </div>
);