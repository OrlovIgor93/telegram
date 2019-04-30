import React from 'react';
import Style from '../style.js'

export const Search = ({ searchAction }) => (
    <div style={Style.searchWrapClass}>
        <div style={Style.imgSearchimgClass}><img src={require('../search_image.png')} alt="Search pic" /></div>
        <div style={Style.inputSearchClass}>
            <input onChange={searchAction} style={Style.inputSearchinputClass} type="search" placeholder="Search..." />
        </div>
    </div>
);

export default Search
