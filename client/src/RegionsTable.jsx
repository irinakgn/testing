import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {TDAS, citiesMap} from './constants'

function TabContainer(props) {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  getTabs = () => {
    return TDAS.map((tda) => {
      return <Tab label={citiesMap[tda]}/>
    })
  }

  //TODO: work here!
  getTabContnent = (tda) => {
    const regionKey = TDAS[tda]; // name of the image
    const regionValue = citiesMap[regionKey] // display name
    return (<TabContainer>
      <Typography> {regionValue} </Typography>
      <div style={{display: 'inline-flex'}}>
        <h2>Desktop</h2>
        <img src={`/images/${regionKey}-desktop.jpg`}></img>
        <h2>Mobile</h2>
        <img src={`/images/${regionKey}-mobile.jpg`}></img>
      </div>
    </TabContainer>)

  }

  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {this.getTabs()}
          </Tabs>
        </AppBar>
        {this.getTabContnent(value)}

      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
