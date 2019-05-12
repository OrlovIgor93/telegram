import React from "react";
import withModal from "../../HocComponets/withModal"
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ConfirmCode = (props) => {

    const {
        openModal,
        isNewUser,
        handleCloseModal,
        onChangeConfirmCode,
        handleConfirmCode,
        setUserName,
        code,
        handleFinishRegistration
    } = props;

    const userNameFieldWrap = (
        <React.Fragment>
            <DialogContent>
                <DialogContentText>
                    You are new user please input you name
                </DialogContentText>
                <TextField
                    onChange={(e) => setUserName(e.target.value)}
                    margin="dense"
                    label="User Name"
                    placeholder="Den Abramov"
                    type="text"
                    fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleFinishRegistration} color="primary">
                    Finish Registration
                </Button>
            </DialogActions>
        </React.Fragment>
    );

    const codeDialogWrap = (
        <React.Fragment>
            <DialogContent>
                <DialogContentText>
                    Please enter your Confirm code and click "Sent code"
                </DialogContentText>
                <TextField
                    onChange={onChangeConfirmCode}
                    value={code}
                    label="Code"
                    type="text"
                    fullWidth
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleConfirmCode} color="primary">
                    Sent code
                </Button>
            </DialogActions>
        </React.Fragment>

    );

    return (
        <Dialog open={openModal}>
            <DialogTitle>Confirm code</DialogTitle>
            {!isNewUser && codeDialogWrap}
            {isNewUser && userNameFieldWrap}
        </Dialog>

    );
};

export default withModal(ConfirmCode);

