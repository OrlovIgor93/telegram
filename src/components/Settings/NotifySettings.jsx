import React from 'react';
// import {LeraStyle} from "../LeraStyles/LeraStyles";

export const NotifySettings = () => (

    <div>
        <div className="box">
            <div>
                <p>Desktop notifications</p>
            </div>
            <div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>
        </div>
        <div className="box">
            <div>
                <p>Background notifications</p>
            </div>
            <div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>
        </div>
        <div className="box">
            <div>
                <p>Message preview</p>
            </div>
            <div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>
        </div>
        <div className="box">
            <div>
                <p>Sound</p>
            </div>
            <div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>
            <div className="tg_slider_wrap">
                <div className="tg_slider_thumb"/>
                <div className="tg_slider_track">
                    <div className="tg_slider_track_fill"/>
                </div>
            </div>
        </div>
    </div>
);