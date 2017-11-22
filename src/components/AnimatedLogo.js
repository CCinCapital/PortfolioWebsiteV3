import React, { PureComponent } from 'react'

class AnimatedLogo extends PureComponent {

  render () {
    const {id, className, eventListeners} = this.props
        
    return (
      <div id={id} className={"ParallelogramP" + (className ? " "+className : "")} {...eventListeners}>
        <div className="logo-part one"></div>
        <div className="logo-part two"></div>
        <div className="logo-part three"></div>
        <div className="logo-part four"></div>
      </div>
    )
  }
}

export default AnimatedLogo
