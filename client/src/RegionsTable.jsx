import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {TDAS, citiesMap} from './constants'
import ImageList from './ImageList'


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

  //TODO:
  getTabContnent = (tda) => {
    const regionKey = TDAS[tda]; // name of the image
    const regionValue = citiesMap[regionKey] // display name

    // likely to be multiple

    //desktop
    const desktopImages = [{img: `/images/${regionKey}-desktop.jpg`, title: regionKey}];


// mobile
    const mobileImages = [{img: `/images/${regionKey}-mobile.jpg`, title: regionKey}];


    return (<TabContainer>
      <Typography> {regionValue} </Typography>
      <div>
        <div>
          <h3>Desktop</h3>
          <ImageList images={desktopImages}/> <ImageList images={desktopOffers}/>

        </div>
        <div>
          <h3>Mobile</h3>
          <ImageList images={mobileImages}/>

        </div>
      </div>

    </TabContainer>)

  };

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

