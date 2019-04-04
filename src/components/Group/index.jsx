import React from "react";
import { Avatar } from "../Avatar";
import { Header } from "./ComponentsGroup/Header";
import { Search } from "./ComponentsGroup/Search";
import { ContactList } from "./ComponentsGroup/ContactList";
import { Navigate } from "./ComponentsGroup/Navigate";

import "./style.css";
import "../MainPage/style.css";

export const GroupPage = () => (
    <div className="head_group">
        <div className="wrap_group">
            <div className="title_wrap_group">
                <div className="new-group">New Group</div>
                <div className="close">Close</div>
            </div>
            <div className="search_wrap">
                <div className="img_search"><img src={require('./search_image.png')} alt="Search pic" /></div>
                <div className="input_search"><input type="search" placeholder="Search..." /></div>
            </div>
            <div className="contact_wrap">
                <ul className="dialogs dialogs_group">
                    <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName dialogName_group">Ilona Menkui</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName dialogName_group">Ilona Menkui</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48 }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName dialogName_group">Dima Platon</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48 }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName dialogName_group">Lera Milasha</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "pink" }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName dialogName_group">Lera Milasha</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "pink" }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName dialogName_group">Lera Milasha</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "pink" }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName dialogName_group">Lera Milasha</div>
                            </div>
                            <div className="infoLastMessage">
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="foot_wrap_group">
                <div className="cancel_group">Cancel</div>
                <div className="next_group">Next</div>
            </div>
        </div>
    </div>
);
