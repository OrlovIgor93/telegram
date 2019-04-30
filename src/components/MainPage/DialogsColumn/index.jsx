import React from "react";
import SearchInput from "../SearchInput";
import {VerticalWrap} from "../VerticalWrap";
import DialogsList from "./DialogsList/DialogsList";
import {dialogsColumnStyle} from "../styles";
import Typography from "@material-ui/core/Typography";

export const DialogsColumn = ({setDialog, notFound}) => (
    <VerticalWrap style={dialogsColumnStyle}>
        <SearchInput />

        <DialogsList setDialog={setDialog} />

        { notFound && <Typography variant="title">Not found</Typography> }
    </VerticalWrap>
);
