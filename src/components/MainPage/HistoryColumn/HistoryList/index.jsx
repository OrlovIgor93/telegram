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
                {console.log('messagesActiveDialog',messagesActiveDialog)}
                {messagesActiveDialog.map(({id, messages}) => (
                    <HistoryListItem
                        key={id}
                        messages={messages}
                    />

                ))}
            </div>
        </VerticalWrap>
    );
};
