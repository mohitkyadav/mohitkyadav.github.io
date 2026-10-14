import React from 'react'
import { Link } from 'react-router-dom'

import BottomNav from '../../../../components/BottomNav'

import './Right.scss'

const apps = [
  { name: 'Flight Globe', link: 'https://fly.only4.dev/', description: 'Your flight log as arcs on a 3D globe' },
  { name: 'Triplanner', link: 'https://trip.only4.dev/', description: 'Offline-first trip planner, day by day' },
  { name: 'whybvg', link: 'https://whybvg.only4.dev/', description: 'Live Berlin public-transport departure board' },
  { name: 'Panauti', link: 'https://panauti.only4.dev/', description: 'Find out if you are the jinx for your team' },
  { name: 'Entumany', link: 'https://ent.only4.dev/', description: 'Self-managed language learning PWA' },
  { name: 'Riddles', link: 'https://riddles.only4.dev/', description: 'Visualize riddles like Monty Hall and 100 Prisoners' },
]

const projects = [
  { name: 'Source Server manager', link: 'https://github.com/mohitkyadav/source-server-manager' },
  { name: 'Invoicify', link: 'https://github.com/2AMDevs/invoicify-app' },
  { name: 'Yubico JS', link: 'https://github.com/mohitkyadav/yubico-js' },
  { name: 'React Pagination Nav', link: 'https://github.com/mohitkyadav/react-pagination-nav' },
  { name: 'Raycast Unogs', link: 'https://github.com/mohitkyadav/raycast-unogs' },
]

export const Right = () => (
  <div className="home-right animation-slide-up">
    <div className="home-right__header">
      <h4 className="home-right__header__link">
        Projects
      </h4>
      <Link
        className="home-right__header__link"
        to="/0"
      >
        0
      </Link>
      <Link
        className="home-right__header__link"
        to="/1"
      >
        1
      </Link>
    </div>
    <div className="home-right__projects">
      {apps.map((app) => (
        <a
          key={app.name}
          href={app.link}
          className="home-right__app-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="home-right__project-link">{app.name}</span>
          <span className="home-right__app-link__description">{app.description}</span>
        </a>
      ))}
      <h4 className="home-right__subheader">On GitHub</h4>
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
