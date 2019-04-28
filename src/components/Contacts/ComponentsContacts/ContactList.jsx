import React from 'react';
import Style from '../style.js'
import Contact from './Contact'

const makeContact = ({ name, imgUrl, status = "Last seen recently", showDelete }) => (
    <Contact avatar="im" name={name} showDelete={showDelete} status={status} />
)

export const ContactList = ({ editMode = false, contacts = [] }) => (
    <div /*className="contact_wrap"*/>
        <ul className="dialogs" style={Style.dialogsGroupClass}>
            {contacts.map(
                contact => makeContact({ ...contact, showDelete: editMode })
            )}
        </ul>
    </div>
);

export default ContactList
