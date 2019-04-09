import React from 'react';

export const SettingsBody = () => (
    <div style={{ background:"white"}} >
        <div style={{
            marginTop: 19+'px',
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 100 + 'px',
            paddingRight: 28 + 'px'
        }}>
            <div className="phone">
                <div className="icon_phone"/>
                <p>Phone number</p>
            </div>
            <div className="username">
                <div className="icon_user"/>
                <p>Username</p>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="box">
                <div className="desc">
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
                <div className="desc">
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
                <div className="desc">
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
                <div className="desc">
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
            <ul className="options">
                <li><a href="#">Share contact</a></li>
                <li><a href="#">Delete contact</a></li>
                <li><a href="#">Clear history</a></li>
                <li><a href="#">Delete conversation</a></li>
            </ul>
        </div>
    </div>
);