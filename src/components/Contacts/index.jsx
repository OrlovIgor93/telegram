import React from "react";
import {
    Header,
    NewContactDialog,
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
            initialContacts: listDialogs,
            showNewContactDialog: false
        }
    }

    search(e) {
        const value = e.target.value.toLowerCase()
        const updatedContacts = this.state.initialContacts.filter(contact => contact.name.toLowerCase().search(value) !== -1)
        this.setState({
            contacts: updatedContacts
        })
    }

    addContact(e) {
        const form = e.currentTarget.form
        const phone = form.phone.value
        const firstName = form.firstname.value
        const lastName = form.lastname.value
        listDialogs.push({ name: `${firstName} ${lastName}`, phone })
        this.setState({
            showNewContactDialog: false,
            contacts: listDialogs,
            initialContacts: listDialogs
        })
        e.preventDefault()
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
                <div style={Style.footWrapGroupClass}>
                    <Button style={Style.footWrapGroupClass} color="primary" onClick={() => this.setState({ showNewContactDialog: true })}>
                        <div style={Style.newContactClass}>New contact</div>
                    </Button>
                </div>
                <NewContactDialog
                    open={this.state.showNewContactDialog}
                    onCancel={() => this.setState({ showNewContactDialog: false })}
                    onSubmit={this.addContact.bind(this)} />
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
