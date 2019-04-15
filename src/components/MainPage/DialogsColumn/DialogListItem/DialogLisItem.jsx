import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { infoLastMessageStyle } from "../../styles";

import { Chip } from "../../Chip";
import { AvatarApp } from "../../../Avatar/Avatar";
import { VerticalWrap } from "../../VerticalWrap";

const styles = theme => ({
  colorAuthorLastMessage: {
    color: "#3a6d99"
  },
  colorTextLastMessage: {
    color: "#9c9c9c"
  },
  overflowStyleMessage: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  listItemText: {
    padding: 0
  }
});

function DialogLisItem({
  selectedIndex,
  setSelectedIndex,
  id,
  name,
  imgUrl,
  lastMessage,
  timeLastMessage,
  classes
}) {
  //const [selectedItem, changeSelectItem] = useState(false);
  const [selected, setSelectedDialog] = useState(false);
  const handleListItemClick = id => {
    setSelectedIndex(id);
    setSelectedDialog(true);
    console.log(id);
    console.log(new Date());
  };

  return (
    <ListItem
      id={id}
      button
      selected={selected}
      onClick={() => handleListItemClick(id)}
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <AvatarApp
          medium
          style={{ marginRight: 15 }}
          src={imgUrl}
          name={name}
        />
      </ListItemAvatar>
      <ListItemText
        className={classes.listItemText}
        primaryTypographyProps={{
          noWrap: true,
          gutterBottom: true
        }}
        primary={name}
        secondaryTypographyProps={{
          className: classes.overflowStyleMessage
        }}
        secondary={
          <React.Fragment>
            <Typography
              inline
              variant="body2"
              className={classes.colorAuthorLastMessage}
              component="span"
              color="textPrimary"
            >
              {name}:&nbsp;
            </Typography>
            <Typography
              inline
              variant="body2"
              component="span"
              className={classes.colorTextLastMessage}
            >
              {lastMessage}
            </Typography>
          </React.Fragment>
        }
      />

      <ListItemSecondaryAction>
        <VerticalWrap style={infoLastMessageStyle}>
          <Typography
            style={{ paddingBottom: 10, color: "#9c9c9c" }}
            variant="caption"
          >
            {new Date(timeLastMessage).toLocaleTimeString()}
          </Typography>
          <Chip value={2} />
        </VerticalWrap>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

DialogLisItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogLisItem);
