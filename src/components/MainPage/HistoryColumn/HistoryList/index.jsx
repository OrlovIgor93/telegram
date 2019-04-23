import React from "react";
import {HistoryListItem} from "../HistoryLisItem";
import {VerticalWrap} from "../../VerticalWrap";
import {MainPageContext} from "../../../MainPage/MainPageContext"


export const HistoryList = () => {
    const {messagesActiveDialog} = React.useContext(MainPageContext);
    return (
        <VerticalWrap style={bottomPanelWrap}>
            <div>
                {messagesActiveDialog.map(({areYouAuthor, messages}) => (
                    <HistoryListItem
                        key={messages[0].timeMessage}
                        messages={messages}
                        areYouAuthor={areYouAuthor}
                    />

                ))}
                {console.log("1111")}
            </div>
        </VerticalWrap>
    );
};

export const bottomPanelWrap = {
    height: "100%",
    flexDirection: "column-reverse",
    overflow: "auto",
    margin: "0 auto",
    padding: "0 15px",
};
