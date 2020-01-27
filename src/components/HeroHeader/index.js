import React from 'react'

import NavBar from '../NavBar'

import './index.scss'

const HeroHeader = () => (
  <div className="hero">
    <img
      className="hero__bg"
      alt="Mohit K.Yadav"
      src="static/img/hero.jpg"
    />
    <div className="hero__content">
      <div className="hero__content__chips">
        chip1, chip2
      </div>
      <div className="hero__content__name">
        Mohit K. Yadav
      </div>
      <div className="hero__content__description">
        {'I <3 anime, CS and chai ☕.'}
        <br />
        And yeah I also love js + py.
      </div>
      <div className="hero__content__nav">
        <NavBar />
      </div>
    </div>
  </div>
)

export default HeroHeader
