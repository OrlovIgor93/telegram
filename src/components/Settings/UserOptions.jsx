import React from 'react';
import {Link} from "react-router-dom";

export const UserOptions = () => (

    <ul className="options">
        <li style={{listStyle: 'none', lineHeight: '2'}}>
            <Link to="/">Share contact</Link>
        </li>
        <li style={{listStyle: 'none', lineHeight: '2'}}>
            <Link to="/">Delete contact</Link>
        </li>
        <li style={{listStyle: 'none', lineHeight: '2'}}>
            <Link to="/">Clear history</Link>
        </li>
        <li style={{listStyle: 'none', lineHeight: '2'}}>
            <Link to="/">Delete conversation</Link>
        </li>
    </ul>
);