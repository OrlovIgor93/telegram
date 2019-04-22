import React from "react";
import {HistoryListItem} from "../HistoryLisItem";
import {VerticalWrap} from "../../VerticalWrap";
import {MainPageContext} from "../../../MainPage/MainPageContext"
import "./style.css";

export const HistoryList = () => {
    const {messagesActiveDialog} = React.useContext(MainPageContext);
    return (
        <div className="message-context">
            <VerticalWrap style={bottomPanelWrap}>
                {messagesActiveDialog.map(({areYouAuthor, messages}) => (
                    <HistoryListItem
                        key={messages[0].timeMessage}
                        messages={messages}
                        areYouAuthor={areYouAuthor}
                    />
                ))}
            </VerticalWrap>
        </div>
    );
};
export const bottomPanelWrap = {
    overflow: "auto",
    justifyContent: "flex-start",
    margin: "0 auto",
    padding: "0 15px 0",
};
