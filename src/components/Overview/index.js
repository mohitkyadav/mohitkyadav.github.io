import React from 'react'

import './index.scss'

const Overview = () => (
  <div className="overview">
    <div className="overview__name">
      Mohit K. Yadav
    </div>
    <div className="overview__description">
      Hi there tourist,
      I do frontend, backend, mobile (flutter) and Windows.
      I love anime, CS, chai and js + py.
      <br />
      Check out highlights section to see my projects.
      <br />
      <br />
      Currently I am working at
      {' '}
      <strong>
        <a
          className="overview__description__job-link"
          href="https://www.blindside.pro/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Blindside HB GmbH
        </a>
      </strong>
      {' '}
      as a Full Stack Engineer.
    </div>
  </div>
)

export default Overview
