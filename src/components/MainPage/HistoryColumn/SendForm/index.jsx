import React, {useState, useContext} from "react";
import {VerticalWrap} from "../../../common/VerticalWrap";
import {ButtonsGroup} from "./ButtonsGroup";


import TextField from "@material-ui/core/TextField";

import {styleMessageInput} from "../../../styles";
import {StoreContext} from "../../../../store";
import {sendMessage} from "../../../../api/firestore";

export const SendForm = () => {
    const {selectedIndex, user:{phoneNumber}, messagesActiveDialog} = useContext(StoreContext);
    const [inputValue, setInputValue] = useState(``);
    const authorLastMessage = messagesActiveDialog.length>0 && messagesActiveDialog[messagesActiveDialog.length-1].authorId;
    const idMessageGroup = messagesActiveDialog.length>0 && messagesActiveDialog[messagesActiveDialog.length-1].idMessageGroup;
    const update = authorLastMessage===phoneNumber;

    const handleChangeInput = (event) => {

        event.keyCode === 13
            ? setInputValue(event.target.value + '/n')
            : setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newMessage = {
            authorId:phoneNumber,
            timeMessage: new Date().getTime(),
            textMessage: inputValue
        };
        sendMessage(selectedIndex, newMessage, update, idMessageGroup);
        setInputValue(``);
    };
    return (
        <form onSubmit={handleSubmit}>
            <VerticalWrap>
                <TextField
                    id="standard-multiline-flexible"
                    value={inputValue}
                    multiline
                    rowsMax="15"
                    margin="normal"
                    style={styleMessageInput}
                    inputProps={{rows: "4"}}
                    onChange={handleChangeInput}
                />

                <ButtonsGroup inputValue={inputValue}/>

            </VerticalWrap>
        </form>
    );
};