import React from "react";
import { HeaderTelegram } from "../Header";

import Header from "../Header/Header";
import { DialogsColumn } from "./DialogsColumn";
import { HistoryColumn } from "./HistoryColumn";
import { VerticalWrap } from "./VerticalWrap";
import { HorizontalWrap } from "./HorizontalWrap";

import { wrapPageStyle, pageContextStyle } from "./styles";

export const MainPage = () => (
         <VerticalWrap style={wrapPageStyle}>
           {/* <HeaderTelegram /> */}
           <Header />
           <HorizontalWrap style={pageContextStyle}>
             <DialogsColumn />
             <HistoryColumn />
           </HorizontalWrap>
         </VerticalWrap>
       );


