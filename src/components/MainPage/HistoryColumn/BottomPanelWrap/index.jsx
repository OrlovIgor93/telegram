import React from "react";
import {AvatarApp} from "../../../Avatar/Avatar";
import {SendForm} from "../SendForm";
import {HorizontalWrap} from "../../HorizontalWrap";
import {MainPageContext} from "../../../MainPage/MainPageContext"

import "./style.css";
import IconButton from "@material-ui/core/IconButton";

export const BottomPanelWrap = () => {
    const {profileInfo: {img, fullName},
           activeDialogInfo: {imgUrl, name},
           handleClickOpenModal} = React.useContext(MainPageContext);
    return (
        <div style={bottomPanelWrap}>
            <HorizontalWrap>
                <IconButton onClick={()=>handleClickOpenModal("My profile")}
                            style={{padding:0, height:56, width: 56,marginRight: 20}}
                >
                    <AvatarApp
                        big
                        src={img}
                        name={fullName}
                    />
                </IconButton>
                <SendForm/>
                <IconButton onClick={()=>handleClickOpenModal("User")}
                            style={{padding:0, height:56, width: 56,marginLeft: 20}}
                >
                    <AvatarApp
                        big
                        src={imgUrl}
                        name={name}
                    />
                </IconButton>
            </HorizontalWrap>
        </div>
    );
};
export const bottomPanelWrap = {
    margin: "0 auto",
    padding: "10px 15px 30px"
};
