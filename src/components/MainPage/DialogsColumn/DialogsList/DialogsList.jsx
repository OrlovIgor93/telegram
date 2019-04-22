import React from "react";
import PropTypes from "prop-types";
import DialogListItem from "../DialogListItem/DialogLisItem";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const styles = () => ({
  dialogsList: {
    overflow: "auto",
    overflowY: "hidden",
    overflowX: "hidden",
    "&:hover": {
      overflowY: "scroll"
    }
  }
  //https://stackoverflow.com/questions/53772429/material-ui-how-can-i-style-the-scrollbar-with-css-in-js
});

const DialogsList = ({ classes, listUserDialogs, }) => (
    <List className={classes.dialogsList} component="nav">
      {listUserDialogs.map(
        ({ id, name, imgUrl, lastMessage, timeLastMessage, numberOfUnreadMessages }) => {
          return (
            <DialogListItem
              key={id}
              id={id}
              name={name}
              imgUrl={imgUrl}
              lastMessage={lastMessage}
              timeLastMessage={timeLastMessage}
              numberOfUnreadMessages={numberOfUnreadMessages}
            />
          );
        }
      )}
    </List>
  );

DialogsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogsList);
