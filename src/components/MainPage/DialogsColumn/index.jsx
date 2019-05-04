import React from "react";
import SearchInput from "../SearchInput";
import { VerticalWrap } from "../VerticalWrap";
import DialogsList from "./DialogsList/DialogsList";
import Typography from "@material-ui/core/Typography";

import { dialogsColumnStyle, notFoundStyle } from "../styles";

export const DialogsColumn = ({ notFound }) => (
    <VerticalWrap style={dialogsColumnStyle}>
        <SearchInput/>
        <DialogsList/>
        {notFound && <Typography variant="title" style={notFoundStyle}>Not found</Typography>}
    </VerticalWrap>
);
