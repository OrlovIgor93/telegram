import React from "react";

import "./style.css";

export const SearchInput = ({onChange}) => (
         <input
           type="text"
           className="input-search"
           placeholder="Search..."
           onChange={onChange}
         />
       );
