import React from 'react';
import { Avatar } from "../../Avatar";
import Style from '../style.js'

export const ContactList = () => (
    <div /*className="contact_wrap"*/>
        <ul className="dialogs" style={Style.dialogsGroupClass}>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div><Avatar name={"i m"} /></div>
                    <div className="dialogInfo">
                        <div className="dialogName" style={Style.dialogName_group}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div><Avatar name={"i m"} /></div>
                    <div className="dialogInfo">
                        <div  style={Style.dialogName_group}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div><Avatar name={"d p"} /></div>
                    <div className="dialogInfo">
                        <div  style={Style.dialogName_group}>Dima Popov</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div><Avatar name={"l m"} /></div>
                    <div className="dialogInfo">
                        <div  style={Style.dialogName_group}>Lera Milasha</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div><Avatar name={"l m"} /></div>
                    <div className="dialogInfo">
                        <div  style={Style.dialogName_group}>Lera Milasha</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div><Avatar name={"l m"} /></div>
                    <div className="dialogInfo">
                        <div  style={Style.dialogName_group}>Lera Milasha</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div><Avatar name={"l m"} /></div>
                    <div className="dialogInfo">
                        <div  style={Style.dialogName_group}>Lera Milasha</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
);


export default ContactList
