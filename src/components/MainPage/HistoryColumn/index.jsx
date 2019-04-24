import React from "react";
import {BottomPanelWrap} from "./BottomPanelWrap";
import {HistoryList} from "./HistoryList";
import {VerticalWrap} from "../VerticalWrap";

import Typography from "@material-ui/core/Typography";

import {historyColumnStyle} from "../styles";

export const HistoryColumn = ({selectedIndex}) => (
    <VerticalWrap style={historyColumnStyle}>
        {selectedIndex ? (
            <React.Fragment>
                <HistoryList/>
                <BottomPanelWrap/>
            </React.Fragment>
        ) : (
            <Typography
                style={{alignSelf: "center", margin: "auto"}}
                variant="title"
            >
                Please select dialog{" "}
            </Typography>
        )}
    </VerticalWrap>
);

