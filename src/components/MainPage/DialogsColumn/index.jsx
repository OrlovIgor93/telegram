import React from "react";
import { SearchInput } from "../SearchInput";
import { VerticalWrap } from "../VerticalWrap";
import DialogsList from "./DialogsList/DialogsList";
import { dialogsColumnStyle } from "../styles";

export const DialogsColumn = ({
         listUserDialogs,
         selectedIndex,
         setActiveDialog
       }) => (
         <VerticalWrap style={dialogsColumnStyle}>
           <SearchInput />
           <DialogsList
             listUserDialogs={listUserDialogs}
             setActiveDialog={setActiveDialog}
             selectedIndex={selectedIndex}
           />
         </VerticalWrap>
       );
