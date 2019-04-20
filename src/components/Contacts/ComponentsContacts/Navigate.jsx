import Style from '../style.js'

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <div style={Style.footWrapGroupClass}>
                    <Button style={Style.footWrapGroupClass} color="primary" onClick={this.handleClickOpen}>
                        <div style={Style.newContactClass}>New contact</div>
                    </Button>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add new contact</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="phone"
                            label="Phone number"
                            type="number"
                            fullWidth />
                        <TextField
                            margin="dense"
                            id="firstname"
                            label="First name"
                            type="text"
                            fullWidth />
                        <TextField
                            margin="dense"
                            id="lastname"
                            label="Last name"
                            type="text"
                            fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Save
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
