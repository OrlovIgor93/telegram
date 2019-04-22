import React from "react";
import {HistoryListItem} from "../HistoryLisItem";
import {VerticalWrap} from "../../VerticalWrap";
import {MainPageContext} from "../../../MainPage/MainPageContext"
import "./style.css";

export const HistoryList = () =>{
    const { messagesActiveDialog } =React.useContext(MainPageContext);
    return(
    <VerticalWrap className="message-context" style={bottomPanelWrap}>
        {messagesActiveDialog.map(({areYouAuthor, messages}) => (
            <HistoryListItem
                key={messages[0].timeMessage}
                messages={messages}
                areYouAuthor={areYouAuthor}
            />
        ))}
    </VerticalWrap>
);
};
export const bottomPanelWrap = {
    margin: "0 auto",
    padding: "0 15px 0",
    overflow: "auto",
    flexDirection: "column-reverse"
};
