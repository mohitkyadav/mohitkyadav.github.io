import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

const BottomNav = () => (
  <div className="bottom-nav">
    <button
      type="button"
      className="bottom-nav__button"
    >
      <FontAwesomeIcon icon={['fab', 'github']} />
      <p className="bottom-nav__button__tooltip">github.</p>
    </button>
    <button
      type="button"
      className="bottom-nav__button"
    >
      <FontAwesomeIcon icon={['fas', 'basketball-ball']} />
      <p className="bottom-nav__button__tooltip">design.</p>
    </button>
  </div>
)

export default BottomNav
