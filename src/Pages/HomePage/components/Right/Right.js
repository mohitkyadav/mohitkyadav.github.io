import React from 'react'
import { Link } from 'react-router-dom'

import BottomNav from '../../../../components/BottomNav'

import './Right.scss'

const projects = [
  { name: 'Riddles', link: 'https://github.com/mohitkyadav/riddles' },
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
