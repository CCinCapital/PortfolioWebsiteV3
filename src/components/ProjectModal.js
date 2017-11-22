import React, { PureComponent } from 'react'

class ProjectModal extends PureComponent {

  render () {
    const {className} = this.props
    return (
      <div className={className}>
        <img className="ProjectModal-Image" src="http://canchen.rocks/img/BlindZer/BlindZer.png"></img>
        <div className="ProjectModal-Discription">
          <p className="ProjectModal-ProjectName">BlindZer</p>
          <p>
            <span className="ProjectModal-ProjectType">Personal Project</span>
            <span className="ProjectModal-Spacer">|</span>
            <span className="ProjectModal-Year">2016</span>
          </p>
        </div>
        <div className="ProjectModal-Overlay"></div>
      </div>
    )
  }
}

export default ProjectModal
