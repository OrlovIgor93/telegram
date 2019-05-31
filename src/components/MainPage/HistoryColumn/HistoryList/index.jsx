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
                {messagesActiveDialog.map(({userName, photoURL,authorId, messages}) => (
                    <HistoryListItem
                        key={`${messages[0].timeMessage}${authorId}`}
                        messages={messages}
                        userName={userName}
                        photoURL={photoURL}
                    />

                ))}
            </div>
        </VerticalWrap>
    );
};
