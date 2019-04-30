import React, {useState, useContext} from "react";
import {VerticalWrap} from "../../VerticalWrap";
import {ButtonsGroup} from "./ButtonsGroup";

import TextField from "@material-ui/core/TextField";

import {styleMessageInput} from "../../styles";
import {StoreContext} from "../../../../store";

export const SendForm = () => {
    const {changeActiveDialog, messagesActiveDialog} = useContext(StoreContext);
    const [inputValue, setInputValue] = useState(``);

    const handleChangeInput = (event) => {
        event.keyCode === 13
            ? setInputValue(event.target.value + '/n')
            : setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newMessage = {
            areYouAuthor: true,
            messages: [{timeMessage: new Date(), textMessage: inputValue}]
        };
        changeActiveDialog([...messagesActiveDialog, newMessage]);
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