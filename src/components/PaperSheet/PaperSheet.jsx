import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {AboutHeading} from "../About/AboutHeading";
import {AboutBody} from "../About/AboutBody";

const styles = () => ({
    root: {
        padding: 0,
        width: '480px',
    },
});

function PaperSheet(props) {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <AboutHeading/>
                <AboutBody/>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(PaperSheet);