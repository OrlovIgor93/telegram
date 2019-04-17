import React, {useState} from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {HorizontalWrap} from "../../MainPage/HorizontalWrap"
import { VerticalWrap } from "../../MainPage/VerticalWrap";
import { countryCode } from "../../../mock/countryCode";

import '../style.css'

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

const Login = ({classes}) => {
const [selectCoutry, setSelectCountry] = useState({});


     const handleChange = (event) => {
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
            <p>
              Please choose your country and enter your full phone number.
            </p>
          </div>

          <VerticalWrap>
            <FormControl className={classes.formControl}>
              <InputLabel>Select coutry</InputLabel>
              <Select
                native
                value={selectCoutry}
                onChange={event => handleChange(event)}
              >
                <option value="" />
                {countryCode.map(el => (
                  <option key={el.code} value={el.name}>
                    {el.name}
                  </option>
                ))}
              </Select>

              <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </FormControl>
          </VerticalWrap>

          <div className="input_number_login">
            <select className="country_input">
              <option>Belarus</option>
              <option>Neverland</option>
              <option>Russia</option>
            </select>
            <input
              className="code_input input_login"
              defaultValue={"+375"}
            />
            <input type="number" className="telephone_input input_login" />
          </div>
        </div>
      </div>
    );
}

       Login.propTypes = {
         classes: PropTypes.object.isRequired
       };

       export default withStyles(styles)(Login);