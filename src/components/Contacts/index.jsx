import React from "react";
import { Avatar } from "../Avatar";
import "./style.css";
import "../MainPage/style.css";

export const Contacts = () => (
    <div className="head3">
        <div className="wrap3">
            <div className="title_wrap">
                <div className="new-group">New Group</div>
                <div className="close">Close</div>
            </div>
            <div className="search_wrap">
                <div className="img_search"><img src={require('../Group/search_image.png')} alt="Search pic" /></div>
                <div className="input_search"><input type="search" placeholder="Search..." /></div>
            </div>
            <div className="contact_wrap">
                <br /> <br /> <br /> <br />
                <ul className="dialogs dialogs3">
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
                    <li>
                        <div className="dialog">
                            <Avatar style={{ height: 48, width: 48, backgroundColor: "coral" }}>dp</Avatar>
                            <div className="dialogInfo">
                                <div className="dialogName">Dima Platon</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dialog">
                            <Avatar style={{ height: 48, width: 48, backgroundColor: "coral" }}>lm</Avatar>
                            <div className="dialogInfo">
                                <div className="dialogName">Lera Milasha</div>
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
