import React from "react";
import {Link} from "react-router-dom";
import {AvatarApp} from "../../../Avatar/Avatar";
import {SendForm} from "../SendForm";
import {HorizontalWrap} from "../../HorizontalWrap";
import {MainPageContext} from "../../../MainPage/MainPageContext"

import "./style.css";

export const BottomPanelWrap = () => {
    const {profileInfo: {img, fullName}, activeDialogInfo: {imgUrl, name}} = React.useContext(MainPageContext);
    return (
        <div style={bottomPanelWrap}>
            <HorizontalWrap>
                <Link to="/profile">
                    <AvatarApp
                        big
                        style={{marginRight: 20}}
                        src={img}
                        name={fullName}
                    />
                </Link>
                <SendForm/>
                <Link
                    to={{
                        pathname: "/contact",
                        state: {imgurl: imgUrl, name: name}
                    }}
                >
                    <AvatarApp
                        big
                        style={{marginLeft: 20}}
                        src={imgUrl}
                        name={name}
                    />
                </Link>
            </HorizontalWrap>
        </div>
    );
};
export const bottomPanelWrap = {
    margin: "0 auto",
    padding: "10px 15px 30px"
};
