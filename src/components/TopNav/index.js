import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

const TopNav = () => (
  <div className="top-nav">
    <img
      className="top-nav__logo"
      src="/static/img/logo.svg"
      alt="logo"
    />

    <button
      type="button"
      className="top-nav__button"
    >
      <FontAwesomeIcon icon={['fas', 'mitten']} />
      <p className="top-nav__button__tooltip">say hi.</p>
    </button>
  </div>
)

export default TopNav
