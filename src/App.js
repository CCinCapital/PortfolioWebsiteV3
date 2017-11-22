import React, { Component } from 'react';
import './stylesheets/styles.css';

import AppWraper from './AppWraper'
import Header from './Header'
import ProjectShelf from './ProjectShelf'

class App extends Component {

  render() {
    return (
      <AppWraper id="AppWraper">
        <Header/>
        <ProjectShelf/>
      </AppWraper>
    );
  }
}

export default App;
