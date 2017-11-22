import React, { Component } from 'react'

import ProjectModal from './components/ProjectModal'

class ProjectShelf extends Component {

  render () {
    return (
      <div className="ProjectShelf">
        <ProjectModal className="ProjectModal ProjectModal-upper"/>
        <ProjectModal className="ProjectModal ProjectModal-lower"/>
        <ProjectModal className="ProjectModal ProjectModal-upper"/>
        <ProjectModal className="ProjectModal ProjectModal-lower"/>
        <ProjectModal className="ProjectModal ProjectModal-upper"/>
        <ProjectModal className="ProjectModal ProjectModal-lower"/>
        <ProjectModal className="ProjectModal ProjectModal-upper"/>
        <ProjectModal className="ProjectModal ProjectModal-lower"/>
      </div>
    )
  }
}

export default ProjectShelf
