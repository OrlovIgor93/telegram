import React, {useContext} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import {infoLastMessageStyle} from "../../styles";

import {Chip} from "../../Chip";
import {AvatarApp} from "../../../Avatar/Avatar";
import {StoreContext} from "../../../../store";
import {setActiveDialog} from "../../../../actions/actionCreatorDialogs";

const styles = () => ({
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



const DialogLisItem = ({
                           id,
                           name,
                           imgUrl,
                           lastMessage,
                           timeLastMessage,
                           numberOfUnreadMessages,
                           classes,

                       }) => {
    const {selectedIndex, dispatchDialogs, setDialog} = useContext(StoreContext);

    return (
        <ListItem
            id={id}
            button
            selected={selectedIndex === id}
            onClick={() => {dispatchDialogs(setActiveDialog(id)); setDialog(id)}}
            alignItems="flex-start"
        >
            <ListItemAvatar>
                <AvatarApp
                    medium
                    style={{marginRight: 15}}
                    src={imgUrl}
                    name={name}
                />
            </ListItemAvatar>
            <ListItemText
style={{padding: 0}}
                primaryTypographyProps={{
                    noWrap: true,
                    gutterBottom: true,
                    overflow: "hidden",
                    textoverflow: "ellipsis"
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

            <ListItemSecondaryAction style={infoLastMessageStyle}>

                <Typography
                    style={{padding: "10px 0", color: "#9c9c9c"}}
                    variant="caption"
                >
                    {new Date(timeLastMessage).toLocaleDateString()}
                </Typography>
                {numberOfUnreadMessages && <Chip value={numberOfUnreadMessages}/>}

            </ListItemSecondaryAction>
        </ListItem>
    );
};

DialogLisItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DialogLisItem);
