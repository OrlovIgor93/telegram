import React from 'react';
import { Avatar } from "../../Avatar";
import Style from '../style.js'

export const ContactList = () => (
    <div /*className="contact_wrap"*/>
        <ul className="dialogs" style={Style.dialogsGroupClass}>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div style={Style.wrapContactList}>
                        <div><Avatar name={"l m"} /></div>
                        <div style={Style.dialogNameGroupClass}>Lera Milasha</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>Last seen recently</div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div style={Style.wrapContactList}>
                        <div><Avatar name={"l m"} /></div>
                        <div style={Style.dialogNameGroupClass}>Lera Milasha</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>Last seen recently</div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div style={Style.wrapContactList}>
                        <div><Avatar name={"i m"} /></div>
                        <div style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>Last seen recently</div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div style={Style.wrapContactList}>
                        <div><Avatar name={"i m"} /></div>
                        <div style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>Last seen recently</div>
                </div>
            </li>
        
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div style={Style.wrapContactList}>
                        <div><Avatar name={"i m"} /></div>
                        <div style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>Last seen recently</div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div style={Style.wrapContactList}>
                        <div><Avatar name={"d p"} /></div>
                        <div style={Style.dialogNameGroupClass}>Dima Platon</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>Last seen recently</div>
                </div>
            </li>
            <li style={Style.liClass}>
                <div style={Style.dialogClass}>
                    <div style={Style.wrapContactList}>
                        <div><Avatar name={"d p"} /></div>
                        <div style={Style.dialogNameGroupClass}>Dima Platon</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>Last seen recently</div>
                </div>
            </li>
        </ul>
    </div>
);

export default ContactList
