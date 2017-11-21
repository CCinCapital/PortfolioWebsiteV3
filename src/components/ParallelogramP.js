import React, { PureComponent } from 'react'

class ParallelogramP extends PureComponent {

  render () {
    const {id, className, children, eventListeners} = this.props

    return (
      <div id={id} className={"ParallelogramP" + (className ? " "+className : "")} {...eventListeners}>
        <span>{children}</span>
      </div>
    )
  }
}

export default ParallelogramP
