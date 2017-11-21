import React, { Component } from 'react'

import AnimatedLogo from './components/AnimatedLogo'
import PrimaryNav from './components/PrimaryNav'

class Header extends Component {

  state = {
    navShow: false,
  }

  toggleNavBar = () => {
    const show = !this.state.navShow
    this.setState({navShow: show})
  }

  render () {
    return (
      <div>
        <div id="triangle"/>
        <AnimatedLogo id="logo" onClick={this.toggleNavBar}/>
        <PrimaryNav/>
      </div>
    )
  }
}

export default Header
