import React, {Component} from 'react';
import './App.css';
import {TDAS} from './constants'
import RegionsTable  from './RegionsTable'

const styles = {
  content: {
    padding: 64
  }
};



class App extends Component {

  render() {
    return (
      <div style={styles.content}>
        <RegionsTable tdas={TDAS}/>
           </div>
    );
  }
}

export default App;
