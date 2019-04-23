import React from 'react';
import Style from '../style.js'
import Contact from './Contact'

export const ContactList = props => (
    <div /*className="contact_wrap"*/>
        <ul className="dialogs" style={Style.dialogsGroupClass}>
            <Contact avatar="im" name="Ilona Menkui" showDelete={props.editMode} status="Last seen recently" />
            <Contact avatar="in" name="Ilona Menkui" showDelete={props.editMode} status="Last seen recently" />
            <Contact avatar="in" name="Ilona Menkui" showDelete={props.editMode} status="Last seen recently" />
            <Contact avatar="in" name="Ilona Menkui" showDelete={props.editMode} status="Last seen recently" />
            <Contact avatar="in" name="Ilona Menkui" showDelete={props.editMode} status="Last seen recently" />
            <Contact avatar="in" name="Ilona Menkui" showDelete={props.editMode} status="Last seen recently" />
            <Contact avatar="in" name="Ilona Menkui" showDelete={props.editMode} status="Last seen recently" />
        </ul>
    </div>
);

export default ContactList
