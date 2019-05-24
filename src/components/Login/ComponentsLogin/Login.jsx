import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { HorizontalWrap } from "../../common/HorizontalWrap";
import { VerticalWrap } from "../../common/VerticalWrap";

import "../style.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  codeTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "30%"
  },
  phoneTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "70%",
  }
});

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200
    }
  }
};

const Login = ({
                 error,
                 phoneNumber,
                 selectCountry,
                 handleBlur,
                 handleChange,
                 handleChangePhoneNumberInput,
                 countryCode,
                 classes
               }) => (
    <div className="login_wrap">
      <div className="login_container">
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 20
            }}
        >
          <h1>Sign in</h1>
          <p>Please choose your country and enter your full phone number.</p>
        </div>

        <FormControl >
          <VerticalWrap >
            <FormControl className={classes.formControl}>
            <InputLabel   htmlFor="select-country">Select country</InputLabel>
            <Select
                id="select-country"
                value={selectCountry}
                onChange={handleChange}
                MenuProps={MenuProps}
            >
              {countryCode.map(el => (
                  <MenuItem key={el.code + el.name} value={el} >
                    {el.name}
                  </MenuItem>
              ))}
            </Select>
            </FormControl>
            <HorizontalWrap>
              <TextField
                  id="code-input"
                  label="Code"
                  className={classes.codeTextField}
                  value={selectCountry.code}
                  disabled
              />
              <TextField
                  id="number-input"
                  label="Phone number"
                  type="number"
                  className={classes.phoneTextField}
                  value={phoneNumber}
                  onChange={handleChangePhoneNumberInput}
                  onBlur={handleBlur}
                  error={!!error}
                  disabled={selectCountry.phoneLength < 0}
                  helperText={error || " "}
              />
            </HorizontalWrap>
          </VerticalWrap>
        </FormControl>
      </div>
    </div>
);

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);