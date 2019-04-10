import React from "react";
import { SearchInput } from "../SearchInput";
import { ListDialogs } from "./ListDialogs";
import { VerticalWrap } from "../VerticalWrap"

import {dialogsColumnStyle} from '../styles'


export const DialogsColumn = () => (
         <VerticalWrap style={dialogsColumnStyle}>
           <SearchInput />
           <ListDialogs />
         </VerticalWrap>
       );



