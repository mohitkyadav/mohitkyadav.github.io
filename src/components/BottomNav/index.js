import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

const BottomNav = () => (
  <div className="bottom-nav">
    <a
      type="button"
      className="bottom-nav__button"
      href="https://github.com/mohitkyadav"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'github']} />
      <p className="bottom-nav__button__tooltip">github.</p>
    </a>
    <a
      type="button"
      className="bottom-nav__button"
      href="https://dev.to/mohitkyadav"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'dev']} />
      <p className="bottom-nav__button__tooltip">writing.</p>
    </a>
    <a
      type="button"
      className="bottom-nav__button"
      href="https://www.deviantart.com/mohitkyadav"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'deviantart']} />
      <p className="bottom-nav__button__tooltip">design.</p>
    </a>
    <a
      type="button"
      className="bottom-nav__button"
      href="https://dribbble.com/draemonn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fas', 'basketball-ball']} />
      <p className="bottom-nav__button__tooltip">design.</p>
    </a>
  </div>
)

export default BottomNav
