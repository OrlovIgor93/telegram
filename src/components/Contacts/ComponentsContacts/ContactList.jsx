import React from 'react';
import Style from '../style.js'
import Contact from './Contact'

const makeContactComponent = ({ name, imgUrl, status, showDelete }) => (
    <Contact imgUrl={imgUrl} name={name} showDelete={showDelete} status={status} />
)

export const ContactList = ({ editMode = false, contacts = [] }) => (
    <div /*className="contact_wrap"*/>
        <ul className="dialogs" style={Style.dialogsGroupClass}>
            {contacts.map(
                contact => makeContactComponent({ ...contact, showDelete: editMode })
            )}
        </ul>
    </div>
);

export default ContactList
