import React from "react";
import {
    Header,
    Navigate,
    Search
} from "./ComponentsContacts";
import ContactList from '../Group/ComponentsGroup/ContactList'
import { Link } from "react-router-dom";

import Style from './style.js'

// edit

export class Contacts extends React.Component {
    constructor() {
        super()
        this.state = {
            editMode: false
        }
    }

    render() {
        return (
            <Wrap>
                <Header>
                    <div style={Style.contactContactsClass}>Contacts</div>
                    <div style={Style.editContactClass} onClick={() => this.setState({ editMode: !this.state.editMode })}>Edit</div>
                    <div style={Style.closeClass}>
                        <Link style={Style.closeClass} to="/">Close</Link>
                    </div>
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
