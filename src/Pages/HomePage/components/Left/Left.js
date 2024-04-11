import React from 'react'

import HomeHero from '../../../../components/HomeHero'

import './Left.scss'

export const Left = () => (
  <div className="home-left animation-slide-down">
    <div className="home-left__name">
      <span>Mohit K. Yadav</span>
    </div>
    <div className="home-left__hero">
      <div className="home-left__hero__wrapper">
        <HomeHero />
      </div>
    </div>
    {/* <div className="home-left__description">
      इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः।
      <p>Indriyāṇi parāṇyāhurindriyebhyaḥ paraṃ manaḥ।</p>
    </div> */}
  </div>
)

export default Left
