import React from 'react';
import { Avatar } from "../../Avatar";

import '../style.css'

export const ContactList = () => (
    <div className="contact_wrap">
        <ul className="dialogs dialogs_group">
            <li>
                <div className="dialog">
                    <div><Avatar name={"i m"} /></div>
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
                    <div><Avatar name={"i m"} /></div>
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
                    <div><Avatar name={"d p"} /></div>
                    <div className="dialogInfo">
                        <div className="dialogName dialogName_group">Dima Popov</div>
                    </div>
                    <div className="infoLastMessage">
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li>
                <div className="dialog">
                    <div><Avatar name={"l m"} /></div>
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
                    <div><Avatar name={"l m"} /></div>
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
                    <div><Avatar name={"l m"} /></div>
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
                    <div><Avatar name={"l m"} /></div>
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
);

export default ContactList
