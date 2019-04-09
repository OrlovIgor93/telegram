import React from 'react';

import '../style.css'

export const Search = () => (
    <div className="search_wrap">
        <div className="img_search"><img src={require('../../Group/search_image.png')} alt="Search pic" /></div>
        <div className="input_search"><input type="search" placeholder="Search..." /></div>
    </div>
);

export default Search
