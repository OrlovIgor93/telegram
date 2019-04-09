import React from 'react';
import { Avatar } from "../../Avatar";
import Style from '../style.js'

export const ContactList = () => (
    <div /*className="contact_wrap"*/>
        <ul className="dialogs" style={Style.dialogsGroupClass}>
            <li>
                <div className="dialog">
                    <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                    <div className="dialogInfo">
                        <div className="dialogName" style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li>
                <div className="dialog">
                    <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                    <div className="dialogInfo">
                        <div className="dialogName" style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li>
                <div className="dialog">
                    <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                    <div className="dialogInfo">
                        <div className="dialogName" style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li>
                <div className="dialog">
                    <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                    <div className="dialogInfo">
                        <div className="dialogName" style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li>
                <div className="dialog">
                    <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                    <div className="dialogInfo">
                        <div className="dialogName" style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                    </div>
                    <div style={Style.infoLastMessageClass}>
                        <div>Last seen recently</div>
                    </div>
                </div>
            </li>
            <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName" style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                            </div>
                            <div style={Style.infoLastMessageClass}>
                                <div>Last seen recently</div>
                            </div>
                        </div>
            </li>
            <li>
                        <div className="dialog">
                            <div><Avatar id="group_avatar" style={{ height: 48, width: 48, backgroundColor: "coral" }}>im</Avatar></div>
                            <div className="dialogInfo">
                                <div className="dialogName" style={Style.dialogNameGroupClass}>Ilona Menkui</div>
                            </div>
                            <div style={Style.infoLastMessageClass}>
                                <div>Last seen recently</div>
                            </div>
                        </div>
                    </li>
        </ul>
    </div>
);