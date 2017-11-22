import React, { Component } from 'react'

import ProjectCard from './components/ProjectCard'

class ProjectShelf extends Component {

  render () {
    return (
      <div className="ProjectShelf">
        <ProjectCard className="ProjectCard ProjectCard-upper"/>
        <ProjectCard className="ProjectCard ProjectCard-lower"/>
        <ProjectCard className="ProjectCard ProjectCard-upper"/>
        <ProjectCard className="ProjectCard ProjectCard-lower"/>
        <ProjectCard className="ProjectCard ProjectCard-upper"/>
        <ProjectCard className="ProjectCard ProjectCard-lower"/>
        <ProjectCard className="ProjectCard ProjectCard-upper"/>
        <ProjectCard className="ProjectCard ProjectCard-lower"/>
      </div>
    )
  }
}

export default ProjectShelf
