import React from 'react'

import ProjectCard from '../ProjectCard'

import './index.scss'

const Highlights = () => (
  <div className="highlights">
    <div className="highlights__name">
      Projekts
    </div>

    <div className="highlights__cards-container">
      <ProjectCard />
    </div>
  </div>
)

export default Highlights
