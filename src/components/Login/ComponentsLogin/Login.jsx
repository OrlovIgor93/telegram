import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { HorizontalWrap } from "../../MainPage/HorizontalWrap";
import { VerticalWrap } from "../../MainPage/VerticalWrap";
import { countryCode } from "../../../mock/countryCode";

import "../style.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  select: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  codeTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "30%",
  },
  phoneTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "70%"
  }
});

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200
    }
  }
};

const Login = ({ classes }) => {
  const [selectCountry, setSelectCountry] = useState({ name: "", code: "" });
  const [phoneNumder, setPhoneNumder] = useState("");

  const handleChange = event => {
    setSelectCountry(event.target.value);
  };

  return (
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

        
        <FormControl>
          <VerticalWrap>
            <InputLabel htmlFor="select-country">Select country</InputLabel>
            <Select
              className="select"
              value={selectCountry}
              onChange={event => handleChange(event)}
              MenuProps={MenuProps}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {countryCode.map(el => (
                <MenuItem key={el.code + el.name} value={el}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>

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
                label="Phone numbe"
                type="number"
                className={classes.phoneTextField}
                value={phoneNumder}
                onChange={e => setPhoneNumder(e.target.value)}

                // onInput={e => {
                //   e.target.value = Math.max(0, parseInt(e.target.value))
                //     .toString()
                //     .slice(0, 9);
                // }}  https://stackoverflow.com/questions/49897335/how-do-i-limit-possible-inputs-of-string-field-in-textfield-component-of-materia
              />
            </HorizontalWrap>
          </VerticalWrap>
        </FormControl>
        <div className="input_number_login">
          <select className="country_input">
            <option>Belarus</option>
            <option>Neverland</option>
            <option>Russia</option>
          </select>
          <input className="code_input input_login" defaultValue={"+375"} />
          <input type="number" className="telephone_input input_login" />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
