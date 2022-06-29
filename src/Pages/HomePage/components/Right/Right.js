import React from 'react'

import BottomNav from '../../../../components/BottomNav'

import './Right.scss'

const projects = [
  { name: 'CSGO Server manager', link: 'https://github.com/mohitkyadav/source-server-manager' },
  { name: 'Invoicify', link: 'https://github.com/2AMDevs/invoicify-app' },
  { name: 'Yubico-JS', link: 'https://github.com/mohitkyadav/yubico-js' },
  { name: 'React-Pagination-Nav', link: 'https://github.com/mohitkyadav/react-pagination-nav' },
]

export const Right = () => (
  <div className="home-right animation-slide-up">
    <div className="home-right__header">Projects</div>
    <div className="home-right__projects">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.link}
          className="home-right__project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name}
        </a>
      ))}
    </div>
    <BottomNav />
  </div>
)

export default Right
