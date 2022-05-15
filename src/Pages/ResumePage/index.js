import React from 'react'

const projects = [
  {
    name: 'Source Server Manager',
    link: 'https://github.com/mohitkyadav/source-server-manager',
    description: 'Lets you manage multiple servers with IP and RCON password. You can change maps kick players and execute any command on a source dedicated game server.',
  },
  {
    name: 'Invoicify App',
    link: 'https://github.com/2AMDevs/invoicify-app',
    description: 'An application aimed to make it easier for SMEs to migrate to digital billing without throwing their exisiting bill books.',
    with: [
      { name: 'AAshutosh Rathi', link: 'https://github.com/aashutoshrathi' }
    ]
  }
]

const ResumePage = () => (
  <div className="resume-page">
    {projects.map((project) => (
      <div
        className="project"
        key={project.name}
      >
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.with && (
          <div className="with">
            <h4>With</h4>
            {project.with.map((withMember) => (
              <div
                className="with-member"
                key={withMember.name}
              >
                <a href={withMember.link}>{withMember.name}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)

export default ResumePage
