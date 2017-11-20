import React, { PureComponent } from 'react'

import Background from './components/Background'

class AppWraper extends PureComponent {

  render () {
    const {id, className} = this.props
    return (
      <div id={id} className={className}>
        <Background id="bg"/>
        {this.props.children}
      </div>
    )
  }
}

export default AppWraper
