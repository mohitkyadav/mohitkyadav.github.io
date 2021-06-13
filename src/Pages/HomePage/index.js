import React from 'react'

import BottomNav from '../../components/BottomNav'
import HomeHero from '../../components/HomeHero'
import AboutMe from '../../components/AboutMe'

import './index.scss'

const HomePage = () => (
  <div className="home-page">
    <div className="home-page__content">
      <AboutMe />
      <HomeHero />
    </div>
    <BottomNav />
  </div>
)

export default HomePage
