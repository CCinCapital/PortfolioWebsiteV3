import React, { PureComponent } from 'react'

class SlideNav extends PureComponent {

  render () {
    return (
      <nav {...this.props}>
        <a><span>Biography</span></a>
        <a><span>Projects</span></a>
        <a><span>Contact</span></a>
      </nav>
    )
  }
}

export default SlideNav
