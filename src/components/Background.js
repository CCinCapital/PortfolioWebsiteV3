import React, { PureComponent } from 'react'

class Background extends PureComponent {

  render () {
    return (
      <div id="bg">
        <div class="triangle"></div>
        {this.props.children}
        
        <div class="strip top"></div>
        <div class="strip bottom"></div>
      </div>
    )
  }
}

export default Background
