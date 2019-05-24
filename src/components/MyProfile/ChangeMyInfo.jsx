import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withModal from "../HocComponets/withModal";

const ChangeMyInfo =({firstName, lastName, handleChangeInput, handleCloseModal, openModal, handleSave})=> (
                <Dialog
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your new info and click "Save"
                        </DialogContentText>
                            <TextField
                                onChange={handleChangeInput('firstName')}
                                value={firstName}
                                margin="dense"
                                id="firstname"
                                label="First name"
                                type="text"
                                fullWidth />
                            <TextField
                                onChange={handleChangeInput('lastName')}
                                value={lastName}
                                margin="dense"
                                id="lastname"
                                label="Last name"
                                type="text"
                                fullWidth />
                        </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseModal} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
        );


export default withModal(ChangeMyInfo);