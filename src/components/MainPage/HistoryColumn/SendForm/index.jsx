import React from "react";
import { TextArea } from "./Textarea";
import { VerticalWrap } from "../../VerticalWrap";
import { ButtonsGroup } from "./ButtonsGroup"

export const SendForm = () => (
  <form>
    <VerticalWrap style={Style}>
      <TextArea />
     
        <ButtonsGroup />
     
    </VerticalWrap>
  </form>
);

const Style = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

