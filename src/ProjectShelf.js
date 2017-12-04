import React, { Component } from 'react'

import ProjectCard from './components/ProjectCard'

class ProjectShelf extends Component {

  render () {
    return (
      <div className="ProjectShelf">
        <ProjectCard 
          projectImg="http://canchen.rocks/img/BlindZer/BlindZer.png"
          projectName="BlindZer"
          projectType="Personal Project"
          projectYear="2016"
        />
        <ProjectCard
          projectImg="http://canchen.rocks/img/SPS/SPS.png"
          projectName="Android App"
          projectType="Capstone Project"
          projectYear="2016"
        />
        <ProjectCard
          projectImg="http://canchen.rocks/img/Portfolio/Website.png"
          projectName="Portfolio Website"
          projectType="Personal Project"
          projectYear="2016"
        />
        <ProjectCard
          projectImg="http://canchen.rocks/img/Printhead/Printhead.png"
          projectName="Prnterhead Driver"
          projectType="Personal Project"
          projectYear="2016"
        />
        <ProjectCard
          projectImg="http://canchen.rocks/img/TugOfWar/FPGA.png"
          projectName="FPGA Tug of War"
          projectType="Personal Project"
          projectYear="2016"
        />
        <ProjectCard
          projectImg="http://canchen.rocks/img/TicTacToe/TicTacToe.png"
          projectName="C++ Tic Tac Toe"
          projectType="Personal Project"
          projectYear="2016"
        />
        <ProjectCard
          projectImg="http://canchen.rocks/img/VanityMirror/VanityMirror.png"
          projectName="Hollywood-Like Vanity Mirror"
          projectType="Personal Project"
          projectYear="2016"
        />
        <ProjectCard
          projectImg="http://canchen.rocks/img/Thingiverse/3d.png"
          projectName="3D Printable Designs"
          projectType="Personal Project"
          projectYear="2016"
        />
      </div>
    )
  }
}

export default ProjectShelf
