import React, { useState } from "react";

export const TextArea = () => {
  const [rows, setRows] = useState(3);
  const [value, setValue] = useState();
  const [style, setStyle] = useState(stylearea);

  const minRows = 3;
  const maxRows = 10;
  const textareaLineHeight = 16;
  
  const handleChange = event => {
    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setValue(event.target.value);
    setRows(currentRows < maxRows ? currentRows : maxRows);
  };

  return (
    <textarea
      style={style}
      cols={45}
      rows={rows}
      value={value}
      placeholder={"Write a message..."}
      onChange={handleChange}
      onFocus={() => setStyle(focusInputStyle)}
      onBlur={() => setStyle(stylearea)}
    />
  );
};

export const stylearea = {
  outline: "none",
  boxSizing: "border-box",
  borderRradius: 3,
  resize: "none",
  overflow: "auto",
  height: "auto",
  border: "0px",
  borderBottom: "2px solid #f2f2f2",
  paddingLeft: 19,
  paddingRight: 45,
  marginBottom: 13
};

export const focusInputStyle = {
  ...stylearea,
  outline: "none",
  borderBottom: "2px solid #64a2fd"
};
