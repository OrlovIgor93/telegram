import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
            open: false,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName
        };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleSave = () => {

        this.props.changeProfileInfo({...this.props.user,
                                        firstName: this.state.firstName,
                                        lastName: this.state.lastName,
                                        fullName: this.state.firstName + " " + this.state.lastName
                                        });

        this.setState({ open: false });
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
    const {firstName, lastName} = this.state;

        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    Edit profile
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your new info and click "Save"
                        </DialogContentText>
                            <TextField
                                onChange={this.handleChange('firstName')}
                                value={firstName}
                                margin="dense"
                                id="firstname"
                                label="First name"
                                type="text"
                                fullWidth />
                            <TextField
                                onChange={this.handleChange('lastName')}
                                value={lastName}
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
                        <Button onClick={this.handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}