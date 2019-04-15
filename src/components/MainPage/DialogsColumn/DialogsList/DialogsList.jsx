import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DialogListItem from "../DialogListItem/DialogLisItem";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const styles = theme => ({
  dialogsList: {
    overflow: "auto",
    overflowY: "hidden",
    overflowX: "hidden",
    "&:hover": {
      overflowY: "scroll"
    }
  }
  // '@global': {
  // '*::-webkit-scrollbar': {
  //   width: '0.4em'
  // },
  // '*::-webkit-scrollbar-track': {
  //   '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  // },
  // '*::-webkit-scrollbar-thumb': {
  //   backgroundColor: 'rgba(0,0,0,.1)',
  //   outline: '1px solid slategrey'
  // }
  //https://stackoverflow.com/questions/53772429/material-ui-how-can-i-style-the-scrollbar-with-css-in-js
});

const DialogsList = ({
  classes,
  listUserDialogs,
}) => {
  const [selectedIndex, setSelectedIndex] = useState();

 
const setActiveDialog =(id)=>{
  setSelectedIndex(id);
  console.log(id);
  console.log(new Date());
}

  return (
    <List className={classes.dialogsList} component="nav">
      {listUserDialogs.map(
        ({ id, name, imgUrl, lastMessage, timeLastMessage }) => (
          <DialogListItem
            key={id}
            id={id}
            name={name}
            imgUrl={imgUrl}
            lastMessage={lastMessage}
            timeLastMessage={timeLastMessage}
            selectedIndex={selectedIndex}
            setSelectedIndex={setActiveDialog}
          />
        )
      )}
    </List>
  );
};

DialogsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogsList);
