import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {
  Grid,
  FormControl,
  MenuItem,
  FormControlLabel,
  InputLabel,
  Select,
  Input,
  FormHelperText,
  Radio,
  FormLabel,
  RadioGroup
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import _ from 'lodash'

const styles = theme => ({
  card: {
    width: 900,
    marginTop: 16,
    marginBottom: 8,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  image: {
    width: 400,
    height: 700,
    padding: 8
  }, formControl: {
    width: 300
  }
});


class TdaCard extends React.Component {
  state = {expanded: false, desktopQuality: 'satisfactory', mobileQuality: 'satisfactory'};

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}));
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };


  render() {
    const {classes, tda} = this.props;


    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {tda[0].toUpperCase()}
            </Avatar>
          }
          title={_.startCase(tda)}
          subheader={'Toyota'}
        />
        <Grid container spacing={40}>

          <Grid item xs={6} lg={6}>

            <Typography variant="subheading" gutterBottom>
              Desktop
            </Typography>
            <img
              className={classes.image}
              src={`images/${tda}-mobile.jpg`}
              title={`${tda}`}
            />
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="desktopQuality"
                name="desktopQuality"
                className={classes.group}
                value={this.state.desktopQuality}
                onChange={this.handleChange}
              >
                <FormControlLabel value="poor" control={<Radio/>} label="Poor"/>
                <FormControlLabel value="satisfactory" control={<Radio/>} label="Satisfactory"/>
                <FormControlLabel value="exceptional" control={<Radio/>} label="Exceptional"/>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Typography variant="subheading" gutterBottom>
              Mobile
            </Typography>
            <img
              className={classes.image}
              src={`images/${tda}-desktop.jpg`}
              title={`${tda}`}
            />
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="mobileQuality"
                name="mobileQuality"
                className={classes.group}
                value={this.state.mobileQuality}
                onChange={this.handleChange}
              >
                <FormControlLabel value="poor" control={<Radio/>} label="Poor"/>
                <FormControlLabel value="satisfactory" control={<Radio/>} label="Satisfactory"/>
                <FormControlLabel value="exceptional" control={<Radio/>} label="Exceptional"/>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <CardContent>

        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>

        </CardActions>
      </Card>
    );
  }
}

TdaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TdaCard);