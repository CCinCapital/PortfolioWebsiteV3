import React, { Component } from 'react'

import ParallelogramP from './ParallelogramP'

class PrimaryNav extends Component {

  render () {
    return (
      <nav className="PrimaryNav">
        <ParallelogramP id="PrimaryNavItem-1" className="PrimaryNavItem" eventListeners={{}}>
          <a>Bio</a>
        </ParallelogramP>
        <ParallelogramP id="PrimaryNavItem-2" className="PrimaryNavItem" eventListeners={{}}>
          <a>Yoooo</a>
        </ParallelogramP>
        <ParallelogramP id="PrimaryNavItem-3" className="PrimaryNavItem" eventListeners={{}}>
          <a>#About</a>
        </ParallelogramP>
        <ParallelogramP id="PrimaryNavItem-menu" className="PrimaryNavItem" eventListeners={{}}>
          +
        </ParallelogramP>
      </nav>
    )
  }
}

export default PrimaryNav
