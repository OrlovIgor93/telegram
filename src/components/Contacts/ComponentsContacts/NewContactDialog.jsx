import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



export const NewContactDialog = ({ open, onCancel, onSubmit,phoneNumber,
                                     onChangePhoneNumber }) => (
    <Dialog
        open={open}
        aria-labelledby="form-dialog-title">
        <form>
            <DialogTitle id="form-dialog-title">Add new contact</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    valur={phoneNumber}
                    onChange={onChangePhoneNumber}
                    label="Phone number"
                    fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary">Cancel</Button>
                <Button color="primary" type="submit" onClick={onSubmit}>Save</Button>
            </DialogActions>
        </form>
    </Dialog>
);

export default NewContactDialog
