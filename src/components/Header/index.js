import React from 'react'

import './style.css'

export const Header = () => (
    <div className="wrapHeader">
        <div className="headerLeftMenu">
            <div className="navButton">
                <a href="">About</a>
            </div>
            <div className="navButton">
                <a href="">User</a>
            </div>
            <div className="navButton">
                <a href="">Login</a>
            </div>
        </div>
        <div className="headerTitle">
            <h2>Liza Smitt</h2>

        </div>
    </div>

);
