import React from "react";
import IconsetW from "../../../../img/icons/IconsetW.png"
import "./style.css";

export const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      style={style.inputSearch}
      placeholder="Search"
      value={value}
      onChange={onChange}
    />
  );
};

const style = {
  inputSearch: {
    margin: "10px 20px",
    height: 25,
    background: "#f2f2f2",
    fontSize: 12,
    padding: "6px 26px 6px 30px",
    border: "1px solid #f2f2f2",
    borderRadius: 5,
    backgroundImage: `url(${IconsetW})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-6px -205px",
    ":hover": {
      background: "#fff",
      outline: "none",
      border: "1px solid #b8b8b8"
    }
  },

  inputSearchActive: {
    background: "#fff"
  }
};
