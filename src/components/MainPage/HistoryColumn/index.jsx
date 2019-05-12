import React from "react";
import { BottomPanelWrap } from "./BottomPanelWrap";
import { HistoryList } from "./HistoryList";
import { VerticalWrap } from "../../common/VerticalWrap";

import Typography from "@material-ui/core/Typography";

import { historyColumnStyle, selectDialog } from "../../styles";

export const HistoryColumn = ({ selected }) => (
    <VerticalWrap style={historyColumnStyle}>
        {selected ? (
            <React.Fragment>
                <HistoryList/>
                <BottomPanelWrap/>
            </React.Fragment>
        ) : (
            <Typography variant="title" style={selectDialog}>
                Please select dialog
            </Typography>
        )}
    </VerticalWrap>
);

