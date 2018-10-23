import React, {Component} from 'react';
import './App.css';
import TdaCard from "./TdaCard";
import {TDAS} from './constants'

const styles = {
  content: {
    padding: 64
  }
};



class App extends Component {

  getTDAList = () => {
    return TDAS.map(tda => <TdaCard key={tda} tda={tda}/>)
  }

  render() {
    return (
      <div style={styles.content}>
        {this.getTDAList()}
      </div>
    );
  }
}

export default App;
