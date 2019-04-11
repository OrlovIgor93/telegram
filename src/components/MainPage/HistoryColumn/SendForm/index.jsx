import React from "react";
import { TextArea } from "./Textarea";
import { VerticalWrap } from "../../VerticalWrap";

export const SendForm = () => (
  <form>
    <VerticalWrap style={Style}>
      <TextArea />
      <div>
        <div
          style={{
            height: 30,
            width: 200,
            backgroundColor: "gray"
          }}
        >Buttons Group</div>
      </div>
    </VerticalWrap>
  </form>
);

const Style = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

