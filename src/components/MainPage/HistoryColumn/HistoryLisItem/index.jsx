import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import {AvatarApp} from "../../../Avatar/Avatar";
import {VerticalWrap} from "../../VerticalWrap";
import {HorizontalWrap} from "../../HorizontalWrap";

import "./style.css";
import {MainPageContext} from "../../MainPageContext";

export const HistoryListItem = ({areYouAuthor, messages}) =>{
    const { profileInfo: {img, fullName}, activeDialogInfo: {imgUrl, name} } = useContext(MainPageContext);
    return (
    <div className="dialog-item">
        <HorizontalWrap style={dialogInfoStyle}>
            <AvatarApp
                style={{marginRight: 15}}
                src={areYouAuthor ? img : imgUrl}
                name={areYouAuthor ? fullName : name}
            />
            <VerticalWrap style={stretchAreaStyle}>
                <VerticalWrap>
                <HorizontalWrap style={{alignItems: "baseline"}}>
                    <Typography variant="subtitle1">
                        {areYouAuthor ? fullName : name}
                    </Typography>
                    <Typography variant="caption" style={{marginLeft: "auto"}}>
                        {new Date(messages[0].timeMessage).toLocaleTimeString()}
                    </Typography>

                </HorizontalWrap>

                <Typography variant="body2" gutterBottom style={{maxWidth: 400}}>
                    {messages[0].textMessage}
                </Typography>
                </VerticalWrap>
                {messages.slice(1).map((mes) =>
                    <HorizontalWrap key={mes.timeMessage} style={{alignItems: "baseline"}}>
                        <Typography variant="body2" gutterBottom style={{maxWidth: 400}}>
                            {mes.textMessage}
                        </Typography>
                        <Typography variant="caption" style={{marginLeft: "auto"}}>
                            {new Date(mes.timeMessage).toLocaleTimeString()}
                        </Typography>
                    </HorizontalWrap>
                )
                }
            </VerticalWrap>
        </HorizontalWrap>
    </div>
);
};
export const stretchAreaStyle = {
    justifyContent: "space-between",
    width: "100%"
};

export const dialogInfoStyle = {
    padding: "7px 14px",
    justifyContent: "space-between",
    overflow: "hidden"
};
