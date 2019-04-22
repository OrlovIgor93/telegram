import React, {useState, useContext} from "react";
import {VerticalWrap} from "../../VerticalWrap";
import {ButtonsGroup} from "./ButtonsGroup";
import TextField from "@material-ui/core/TextField"
import {MainPageContext} from "../../MainPageContext";

export const SendForm = () => {
    const {changeActiveDialog, messagesActiveDialog} = useContext(MainPageContext);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target: {value}}) => {
        setInputValue(value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const newMessage = {
            areYouAuthor: true,
            messages: [{timeMessage: new Date(), textMessage: inputValue}]
        };
        changeActiveDialog([...messagesActiveDialog, newMessage])

    };
    return (
        <form onSubmit={handleSubmit}>
            <VerticalWrap style={Style}>
                <TextField
                    id="standard-multiline-flexible"
                    value={inputValue}
                    multiline
                    rowsMax="15"
                    margin="normal"
                    style={styleMessageInput}
                    inputProps={{rows: "4"}}
                    onChange={handleInputChange}
                />

                <ButtonsGroup/>

            </VerticalWrap>
        </form>
    );
};

const styleMessageInput = {
    width: "400px",
};
const Style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

