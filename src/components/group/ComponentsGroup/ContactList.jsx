import React from 'react';
import { Avatar } from "../../Avatar";

import '../style.css'

export const ContactList = () => (
    <div className="contact_wrap">
        <ul className="dialogs dialogs_group">
            <li>
                <div className="dialog">
                    <Avatar style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar>
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
                    <Avatar style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar>
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
                    <Avatar style={{ height: 48, width: 48, backgroundColor: "lightgreen" }}>dp</Avatar>
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
                    <Avatar style={{ height: 48, width: 48, backgroundColor: "dark" }}>lm</Avatar>
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
                    <Avatar style={{ height: 48, width: 48, backgroundColor: "dark" }}>lm</Avatar>
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
                    <Avatar style={{ height: 48, width: 48, backgroundColor: "dark" }}>lm</Avatar>
                    <div className="dialogInfo">
                        <div className="dialogName dialogName_group">Lera Milasha</div>
                    </div>
                    <div className="infoLastMessage">
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>);