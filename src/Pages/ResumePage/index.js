import React from 'react'

import ProjectCard from '../../components/ProjectCard'

import './index.scss'

const projects = [
  {
    name: 'Source Server Manager',
    link: 'https://github.com/mohitkyadav/source-server-manager',
    cover: 'https://picsum.photos/400/300',
    description: 'Lets you manage multiple servers with IP and RCON password. You can change maps kick players and execute any command on a source dedicated game server.',
  },
  {
    name: 'Invoicify App',
    link: 'https://github.com/2AMDevs/invoicify-app',
    cover: 'https://picsum.photos/400/300',
    description: 'An application aimed to make it easier for SMEs to migrate to digital billing without throwing their exisiting bill books.',
    with: [
      { name: 'AAshutosh Rathi', link: 'https://github.com/aashutoshrathi' }
    ]
  }
]

const ResumePage = () => (
  <div className="resume-page">
    <div className="resume-page__projects">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          project={project}
        />
      ))}
    </div>
  </div>
)

export default ResumePage
