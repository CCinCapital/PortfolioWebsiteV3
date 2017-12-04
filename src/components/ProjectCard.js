import React, { PureComponent } from 'react'

const ProjectImg = ({projectImg}) => {
  return <div className="ProjectCard-Image">
    <img alt="" src={projectImg}></img>          
  </div>
} 

const ProjectDiscription = ({projectName, projectType, projectYear}) => {
  return <div className="ProjectCard-Discription">
    <p className="ProjectCard-ProjectName">{projectName}</p>
    <p>
      <span className="ProjectCard-ProjectType">{projectType}</span>
      <span className="ProjectCard-Spacer">|</span>
      <span className="ProjectCard-Year">{projectYear}</span>
    </p>
  </div>
}

const ProjectOverlay = ({}) => {
  return <div className="ProjectCard-Overlay"></div>
}

class ProjectCard extends PureComponent {

  render () {
    const {onClick, projectImg, projectName, projectType, projectYear} = this.props
    return (
      <div className="ProjectCard" onClick={onClick}>
        <ProjectImg projectImg={projectImg}/>
        <ProjectDiscription projectName={projectName} projectType={projectType} projectYear={projectYear}/>
        <ProjectOverlay />
      </div>
    )
  }
}

export default ProjectCard
