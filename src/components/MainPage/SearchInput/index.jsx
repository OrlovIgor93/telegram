import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const styles = () => ({
  search: {
    display: "flex",
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: "6px 10px",
    margin: "10px 20px",
    alignItems: "center",
    justifyContent: "flex-start",
    border: "1px solid #b8b8b8",
    "&:hover": {
      backgroundColor: "#fff",
      border: "1px solid #b8b8b8"
    }
  },
  searchIcon: {
    display: "flex",
    color: "#bfbfbf",
    paddingRight: "10px",
  }
});

export const SearchInput = ({ valueSearchInput, onChangeSearchInput, classes }) => {
         return (
           <div className={classes.search}>
             <div className={classes.searchIcon}>
               <SearchIcon />
             </div>
             <InputBase
               value={valueSearchInput}
               onChange={onChangeSearchInput}
               placeholder="Search…"
             />
           </div>
         );
       };

SearchInput.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchInput);
