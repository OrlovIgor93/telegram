import React from "react";
import { Avatar } from "../Avatar";
import "../MainPage/style.css";

export const GroupPage = () => (
    <div className="head">
        <div className="wrap">
            <div className="title_wrap">
                <div className="new-group">New Group</div>
                <div className="close">Close</div>
            </div>
            <div className="search_wrap">
                <div className="img_search"><img src={require('./search_image.png')} alt="Search pic" /></div>
                <div className="input_search"><input type="search" placeholder="Search..." /></div>
            </div>
            <div className="contact_wrap">
                <ul className="dialogs">
                    <li>
                        <div className="dialog">
                            <Avatar style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar>
                            <div className="dialogInfo">
                                <div className="dialogName">Ilona Menkui</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="foot_wrap">
                <div className="cancel">Cancel</div>
                <div className="next">Next</div>
            </div>
        </div>
    </div>
);
