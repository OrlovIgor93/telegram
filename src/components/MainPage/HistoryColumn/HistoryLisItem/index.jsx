import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import {AvatarApp} from "../../../common/Avatar/Avatar";
import {VerticalWrap} from "../../../common/VerticalWrap";
import {HorizontalWrap} from "../../../common/HorizontalWrap";
import {dialogInfoStyle, stretchAreaStyle} from "../../../styles"
import "./style.css"
import {StoreContext} from "../../../../store";

export const HistoryListItem = ({messages, photoURL, userName}) => (

    <HorizontalWrap style={dialogInfoStyle}>
        <AvatarApp
            style={{marginRight: 15}}
            src={photoURL}
            name={userName}
        />
        <VerticalWrap style={stretchAreaStyle}>
            <VerticalWrap>
                <HorizontalWrap style={{alignItems: "baseline"}}>
                    <Typography variant="subtitle1">
                        {userName}
                    </Typography>
                    <Typography variant="caption" style={{marginLeft: "auto"}}>
                        {new Date(+messages[0].timeMessage).toLocaleTimeString()}
                    </Typography>

                </HorizontalWrap>

                <Typography
                    variant='caption'
                    dangerouslySetInnerHTML={{__html: messages[0].textMessage}}
                    style={{whiteSpace: "pre-wrap", maxWidth: 500, alignItems: "baseline"}}
                />

            </VerticalWrap>
            {messages.slice(1).map((mes) =>
                <HorizontalWrap key={mes.timeMessage} style={{alignItems: "baseline"}}>
                    <Typography
                        dangerouslySetInnerHTML={{__html: mes.textMessage}}
                        variant="body2" gutterBottom style={{whiteSpace: "pre-wrap", maxWidth: 500}}/>

                    <Typography variant="caption" style={{marginLeft: "auto"}}>
                        {new Date(+mes.timeMessage).toLocaleTimeString()}
                    </Typography>
                </HorizontalWrap>
            )
            }
        </VerticalWrap>
    </HorizontalWrap>

);
