import React, { PureComponent } from 'react'

class Background extends PureComponent {

  render () {
    return (
      <div {...this.props}>
        <div className="triangle"></div>
        <div className="strip top"></div>
        <div className="strip bottom"></div>
      </div>
    )
  }
}

export default Background
