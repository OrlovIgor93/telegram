
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { countryCode } from '../../../mock/countryCode'
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const SimpleSelect = ({
  classes,
  error,
  errorMessage,
  country,
  phoneNumber,
  handleChange,
  handleBlur,
  handleChangeInputPhoneNumber}) => (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="country-simple">Country</InputLabel>
          <Select
            value={ country}
            onChange={  handleChange}
            inputProps={{
              name: 'country',
              id: 'country-simple',
            }}
          >

            {countryCode.map((element) => <MenuItem key={element.code} value={element}>{element.name}</MenuItem>)}
            {console.log( country)}
          </Select>
          <TextField
            InputLabelProps={{ shrink: true }}
            id="standard-name"
            label="Code"
            className={classes.textField}
            value={ country.code}
            margin="normal"
          />
        </FormControl>
        <FormControl className={classes.formControl} error={ true}>
          <TextField
            type="number"
            disabled={! country}
            InputLabelProps={{ shrink: true }}
            id="standard-name"
            label="Phone"
            className={classes.textField}
            value={ phoneNumber}
            margin="normal"
            onChange={  handleChangeInputPhoneNumber}
            onBlur={  handleBlur}
          />

          <FormHelperText id="component-error-text">{ errorMessage}</FormHelperText>
        </FormControl>
      </form>
    );

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
