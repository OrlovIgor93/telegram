import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import {AvatarApp} from "../../../common/Avatar/Avatar";
import {VerticalWrap} from "../../../common/VerticalWrap";
import {HorizontalWrap} from "../../../common/HorizontalWrap";
import {dialogInfoStyle, stretchAreaStyle} from "../../../styles"
import "./style.css"
import {StoreContext} from "../../../../store";

export const HistoryListItem = ({areYouAuthor, messages}) => {

    const {profileInfo: {img, fullName}, activeDialogInfo: {imgUrl, name}} = useContext(StoreContext);
    return (

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

                    <Typography
                        id="typography-text-message"
                        dangerouslySetInnerHTML={{__html: messages[0].textMessage}}
                        style={{whiteSpace: "pre-wrap", maxWidth: 500, alignItems: "baseline"}}
                    />

                </VerticalWrap>
                {messages.slice(1).map((mes) =>
                    <HorizontalWrap key={mes.timeMessage} style={{alignItems: "baseline"}}>
                        <Typography
                            dangerouslySetInnerHTML={{__html: mes.textMessage}}
                            variant="body2" gutterBottom style={{maxWidth: 500}}/>

                        <Typography variant="caption" style={{marginLeft: "auto"}}>
                            {new Date(mes.timeMessage).toLocaleTimeString()}
                        </Typography>
                    </HorizontalWrap>
                )
                }
            </VerticalWrap>
        </HorizontalWrap>

    );
};