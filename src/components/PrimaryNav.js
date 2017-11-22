import React, { Component } from 'react'

import ParallelogramP from './ParallelogramP'
import TiLinkOutline from 'react-icons/lib/ti/link-outline'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaCodepen from 'react-icons/lib/fa/codepen'

class PrimaryNav extends Component {

  state = {
    isMenuOpen: false,
  }

  toggleMenu = () => {
    console.log('click')
    const {isMenuOpen} = this.state
    this.setState({isMenuOpen: !isMenuOpen})
  }

  render () {
    const {isMenuOpen} = this.state
    const toggleMenu = this.toggleMenu

    return (
      <nav className="PrimaryNav">
        <ParallelogramP id="PrimaryNavItem-1" className="PrimaryNavItem">
          <a>CCinCapital</a>
        </ParallelogramP>
        <ParallelogramP id="PrimaryNavItem-2" className="PrimaryNavItem">
          <a>+About Me</a>
        </ParallelogramP>
        <ParallelogramP id="PrimaryNavItem-3" className="PrimaryNavItem">
          <a>#About</a>
        </ParallelogramP>
        <ParallelogramP id="PrimaryNavItem-menu" className="PrimaryNavItem" eventListeners={{onClick: toggleMenu}}>
          <ParallelogramP id="PrimaryNavItem-menu-icon" className={isMenuOpen ? "PrimaryNavItem bar-open" : "PrimaryNavItem"}>
            <TiLinkOutline/>
          </ParallelogramP>
          <ParallelogramP id="PrimaryNavItem-menu-social-bar" className={isMenuOpen ? "PrimaryNavItem bar-open" : "PrimaryNavItem"}>
            <FaGithub/>
            <FaLinkedin/>
            <FaCodepen/>
          </ParallelogramP>          
        </ParallelogramP>
      </nav>
    )
  }
}

export default PrimaryNav
