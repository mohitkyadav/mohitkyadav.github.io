import React from 'react'

import HomeHero from '../../../../components/HomeHero'

import './Left.scss'

export const Left = () => (
  <div className="home-left animation-slide-down">
    <div className="home-left__hero">
      <div className="home-left__hero__wrapper">
        <HomeHero />
      </div>
    </div>
    <div className="home-left__name">
      <span>Mohit K. Yadav</span>
      <p>— code & a little design</p>
    </div>
    <div className="home-left__description">
      Software engineer focused on
      modular design and development.
    </div>
  </div>
)

export default Left
