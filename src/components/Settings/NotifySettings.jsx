import React from 'react';
// import {LeraStyle} from "../LeraStyles/styles";

export const SettingsItem = ({title}) => (
        <div className="box">
            <div>
                <p>{title}</p>
            </div>
            <div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>
        </div>
);
export const NotifySettings = () => (
    <div>
        <SettingsItem title="Dark theme"/>
        <SettingsItem title="Bright theme"/>
    </div>
);