import React from "react";
import {
    Header,
    Navigate,
    Search,
    ContactList
} from "./ComponentsContacts"

import Style from './style.js'
import { Button } from "@material-ui/core"

import { listDialogs } from "../../mock/listDialogs"

export class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            contacts: listDialogs,
            initialContacts: listDialogs
        }
    }

    search(e) {
        const value = e.target.value.toLowerCase()
        const updatedContacts = this.state.initialContacts.filter(contact => contact.name.toLowerCase().search(value) !== -1)
        this.setState({
            editMode: this.state.editMode,
            contacts: updatedContacts
        })
    }

    render() {
        const { onClose } = this.props;
        return (
            <Wrap>
                <Header>
                    <div style={Style.contactContactsClass}>Contacts</div>
                    <div style={Style.editContactClass} onClick={() => this.setState({ editMode: !this.state.editMode })}>Edit</div>
                    <Button onClick={onClose} style={Style.closeClass}>
                        Close
                    </Button>
                </Header>
                <Search searchAction={this.search.bind(this)} />
                <ContactList contacts={this.state.contacts} editMode={this.state.editMode} />
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
