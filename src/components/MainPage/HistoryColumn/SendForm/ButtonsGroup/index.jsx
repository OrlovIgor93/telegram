import React from "react";
import { HorizontalWrap } from "../../../HorizontalWrap";
import { Button } from "../../../Button";
import General from "../../../../../img/icons/General.png";
import IconsetW from "../../../../../img/icons/IconsetW.png";

import ButtonBase from '@material-ui/core/ButtonBase';
import emojisprite_0 from "../../../../../img/icons/emojisprite_0.png";

export const ButtonsGroup = ({inputValue}) => (
  <HorizontalWrap style={buttonsGroupStyle}>
    <Button style={buttonSendFileStyle} />
    <Button style={buttonSendMediaStyle} />
    <Button style={buttonSendVoiceStyle} />
    <EmomojiGroupButton />
      <ButtonBase
          style={submitButtonStyle}
          variant="contained"
          type="submit"
          disabled={!inputValue.replace(/\s+/, '').length}
      >
          SEND
      </ButtonBase>
  </HorizontalWrap>
);

const EmomojiGroupButton = () => (
  <HorizontalWrap>
    <Button style={{ ...commonEmojiStyle, backgroundPosition: "-480px -60px" }} />
    <Button style={{ ...commonEmojiStyle, backgroundPosition: "-200px -120px" }} />
    <Button style={{ ...commonEmojiStyle, backgroundPosition: "-120px 0px" }} />
    <Button style={{ ...commonEmojiStyle, backgroundPosition: "-140px 0px" }} />
    <Button style={{ ...commonEmojiStyle, backgroundPosition: "-440px 0px" }} />
    <Button style={{ ...commonEmojiStyle, backgroundPosition: "-60px 0px" }} />
    <Button style={{ ...commonEmojiStyle, backgroundPosition: "-300px 0px" }} />
  </HorizontalWrap>
);

export const submitButtonStyle = {
  color: "#499dd9",
  fontSize: 13,
  fontWeight: 800
};

export const commonEmojiStyle = {
  margin: 5,
  width: 20,
  height: 20,
  outline: 0,
  backgroundImage: `url(${emojisprite_0})`,
  backgroundSize: "540px 140px",
  backgroundRepeat: "no-repeat"
};

export const buttonsGroupStyle = {
  width: "100%",
  justifyContent: "space-around",
  alignItems: "center"
};

export const commomButtonStyle = {
  backgroundImage: `url(${General})`,
  backgroundRepeat: "no-repeat"
};

export const buttonSendFileStyle = {
  ...commomButtonStyle,
  width: 18,
  height: 17,
  backgroundPosition: "-11px -455px"
};

export const buttonSendMediaStyle = {
  ...commomButtonStyle,
  width: 20,
  height: 18,
  backgroundPosition: "-10px -399px"
};
export const buttonSendVoiceStyle = {
  ...commomButtonStyle,
  width: 18,
  height: 22,
  backgroundImage: `url(${IconsetW})`,
  backgroundPosition: "-12px -285px"
};
