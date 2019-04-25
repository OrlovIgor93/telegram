import React from "react";
import {HistoryListItem} from "../HistoryLisItem";
import {VerticalWrap} from "../../VerticalWrap";
import {MainPageContext} from "../../../MainPage/MainPageContext";
import {bottomPanelWrap} from "../../styles";

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
            </div>
        </VerticalWrap>
    );
};
