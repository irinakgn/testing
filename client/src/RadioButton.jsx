import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {FormControlLabel, Radio} from '@material-ui/core';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: 'acceptable',
  };

  handleChange = event => {
    this.setState({selectedValue: event.target.value});
  };

  render() {
    const {classes} = this.props;

    return (
      <div style={{color: 'white'}}>
        <FormControlLabel value="acceptable" control={<Radio
          checked={this.state.selectedValue === 'acceptable'}
          onChange={this.handleChange}
          value="acceptable"
          name="radio-button-demo"
          aria-label="Acceptable"
        />} label="Acceptable"/>
        <FormControlLabel value="notAcceptable" control={<Radio
          checked={this.state.selectedValue === 'notAcceptable'}
          onChange={this.handleChange}
          value="notAcceptable"
          name="radio-button-demo"
          aria-label="notAcceptable"
        />} label="Not Acceptable"/>
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);