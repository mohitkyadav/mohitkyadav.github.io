import React from 'react'

import NavBar from '../NavBar'

import './index.scss'

const HeroHeader = () => (
  <div className="hero">
    <div className="hero__content">
      <div className="hero__content__name">
        Mohit K. Yadav
      </div>
      <div className="hero__content__description">
        Hi there tourist, I
        {' '}
        <span role="img">❤</span>
        {' '}
        anime, CS, chai ☕and js + py.
        <br />
        Check out gyan section to see my posts.
      </div>
      <div className="hero__content__nav">
        <NavBar />
      </div>
      <div className="hero__content__chips">
        chip1, chip2
      </div>
    </div>
    <div className="hero__bg">
      <img
        className="hero__bg__img"
        alt="Mohit K.Yadav"
        src="static/img/hero.jpg"
      />
    </div>
  </div>
)

export default HeroHeader
