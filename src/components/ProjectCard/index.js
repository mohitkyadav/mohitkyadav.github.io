import React from 'react'

import './index.scss'

const ProjectCard = ({ project }) => {
  const {
    name, description, link, with: withMembers, cover,
  } = project

  return (
    <div className="project-card">
      <img
        className="project-card__cover"
        src={cover}
        alt={name}
      />
      <div className="project-card__info">
        <h3>{name}</h3>
        <p>{description}</p>
        {withMembers && (
          <div className="with">
            <h4>With</h4>
            {withMembers.map((withMember) => (
              <div
                className="with-member"
                key={withMember.name}
              >
                <a href={withMember.link}>{withMember.name}</a>
              </div>
            ))}
          </div>
        )}
        <a
          className="project-card__info__link"
          href={link}
        >
          {link}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
