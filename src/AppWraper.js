import React, { PureComponent } from 'react'

class AppWraper extends PureComponent {

  render () {
    const {id, className} = this.props
    return (
      <div id={id} className={className}>
        <div className="stripe top"/>
        <div className="triangle"/>

        {this.props.children}
        
        <div className="stripe bottom"/>
      </div>
    )
  }
}

export default AppWraper
