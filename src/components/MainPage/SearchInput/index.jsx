import React, {useState} from "react";
import { inputSearchStyle, focusInputStyle} from '../styles'

export const SearchInput = ({ value, onChange }) => {
  const [style, setStyle] = useState(inputSearchStyle);

  return (
    <input
      type="text"
      style={style}
      placeholder="Search"
      value={value}
      onChange={onChange}
      onSelect={() => setStyle(focusInputStyle)}
      onBlur={() => setStyle(inputSearchStyle)}
    />
  );
};