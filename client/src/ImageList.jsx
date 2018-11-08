import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Grid, GridListTileBar, Dialog, DialogTitle, DialogActions, DialogContent, Button} from '@material-ui/core';
import RadioButton from './RadioButton';
import {capitalize} from 'lodash'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class ImageList extends React.PureComponent {


  state = {
    isOpen: false,
    currentImage: null,
  };

  onOpen = (image) => {
    this.setState({
      isOpen: !this.state.isOpen,
      currentImage: image
    })
  }

  onClose = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      currentImage: null
    })
  }

  render() {
    const {classes, images} = this.props;
    const {currentImage} = this.state
    return (
      <div className={classes.root}>
        {this.state.isOpen && <Dialog open>
          <Dialog
            maxWidth={'lg'}
            open
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">{capitalize(currentImage.title)}</DialogTitle>
            <DialogContent>
              <img src={currentImage.img}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onClose} color="primary">
                Close
              </Button>

            </DialogActions>
          </Dialog>
        </Dialog>}
        <Grid container spacing={8}>
          <Grid item xs={12} lg={12}>
            <GridList className={classes.gridList} cols={2.5}>
              {images.map(tile => (
                <GridListTile key={tile.img} style={{borderTop: '2px solid black'}}>
                  <img src={tile.img} alt={tile.title} width={200} onClick={() => this.onOpen(tile)}/>
                  <GridListTileBar
                    style={{
                      color:'black',
                      backgroundColor: '#d8caca',
                    }}
                    title={tile.title}
                    actionIcon={
                      <RadioButton/>
                    }
                  />
                </GridListTile>
              ))}>
            </GridList>
          </Grid>
        </Grid>
      </div>);
  }
}

ImageList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageList);