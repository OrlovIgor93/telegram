import React from "react";
import { BottomPanelWrap } from "./BottomPanelWrap";
import { HistoryList } from "./HistoryList";
import { VerticalWrap } from "../VerticalWrap";
import Typography from "@material-ui/core/Typography";

import { historyColumnStyle } from "../styles";

export const HistoryColumn = ({
  messagesActiveDialog,
  profileInfo,
  activeDialogInfo
}) => {
  // const [dialog, setActiveDialog] = useState(messagesActiveDialog);

  // useEffect(() => {
  //   setActiveDialog(messagesActiveDialog);
  // }, [messagesActiveDialog]);

  return (
    <VerticalWrap style={historyColumnStyle}>
      {messagesActiveDialog.length > 0 && (
        <React.Fragment>
          <BottomPanelWrap
            profileInfo={profileInfo}
            activeDialogInfo={activeDialogInfo}
          />
          <HistoryList
            messagesActiveDialog={messagesActiveDialog}
            profileInfo={profileInfo}
            activeDialogInfo={activeDialogInfo}
          />
        </React.Fragment>
      )}
      {messagesActiveDialog.length === 0 && (
        <Typography
          style={{ alignSelf: "center", margin: "auto" }}
          variant="title"
        >
          Please select dialog{" "}
        </Typography>
      )}
    </VerticalWrap>
  );
};
