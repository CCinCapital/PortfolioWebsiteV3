import React, { Component } from 'react'

import AnimatedLogo from './components/AnimatedLogo'
import SlideNav from './components/SlideNav'

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
      <div {...this.props}>
        <AnimatedLogo id="logo" onClick={this.toggleNavBar}/>
        <SlideNav id="slide-nav" className={this.state.navShow ? 'show' : ''}/>
      </div>
    )
  }
}

export default Header
