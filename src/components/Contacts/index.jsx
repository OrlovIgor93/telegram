import React from "react";
import {
    Header,
    Navigate,
    Search,
    ContactList
} from "./ComponentsContacts";

import Style from './style.js'
import {Button} from "@material-ui/core";

// edit

export class Contacts extends React.Component {
    // state = {
    //     user: JSON.parse(localStorage.getItem('profileInfo'))
    // };
    
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    render() {
        const {onClose} = this.props;
        return (
            <Wrap>
                <Header>
                    <div style={Style.contactContactsClass}>Contacts</div>
                    <div style={Style.editContactClass} onClick={() => this.setState({ editMode: !this.state.editMode })}>Edit</div>
                    <Button onClick={onClose} style={Style.closeClass}>
                       Close
                    </Button>
                </Header>
                <Search />
                <ContactList editMode={this.state.editMode} />
                <Navigate />
            </Wrap>
        )
    }
}

export const Wrap = props => (
    <div style={Style.headGroupClass}>
        <div style={Style.wrapGroupClass}>
            {props.children}
        </div>
    </div >
);
