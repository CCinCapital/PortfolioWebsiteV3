import React, { Component } from 'react';
import './stylesheets/styles.css';

import AppWraper from './AppWraper'
import Header from './Header'

class App extends Component {

  render() {
    return (
      <AppWraper id="AppWraper">
        <Header/>
      </AppWraper>
    );
  }
}

export default App;
