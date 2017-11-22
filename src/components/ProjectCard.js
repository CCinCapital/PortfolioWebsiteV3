import React, { PureComponent } from 'react'

class ProjectCard extends PureComponent {

  render () {
    const {className} = this.props
    return (
      <div className={className}>
        <img className="ProjectCard-Image" src="http://canchen.rocks/img/BlindZer/BlindZer.png"></img>
        <div className="ProjectCard-Discription">
          <p className="ProjectCard-ProjectName">BlindZer</p>
          <p>
            <span className="ProjectCard-ProjectType">Personal Project</span>
            <span className="ProjectCard-Spacer">|</span>
            <span className="ProjectCard-Year">2016</span>
          </p>
        </div>
        <div className="ProjectCard-Overlay"></div>
      </div>
    )
  }
}

export default ProjectCard
