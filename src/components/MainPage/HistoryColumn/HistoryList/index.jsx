import React from "react";
import {HistoryListItem} from "../HistoryLisItem";
import {VerticalWrap} from "../../../common/VerticalWrap";
import {bottomPanelWrap} from "../../../styles";
import {StoreContext} from "../../../../store";

export const HistoryList = () => {
    const {messagesActiveDialog} = React.useContext(StoreContext);
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
