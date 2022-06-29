import React from 'react'

import BottomNav from '../../components/BottomNav'
import HomeHero from '../../components/HomeHero'
import AboutMe from '../../components/AboutMe'

import './index.scss'

const HomePage = () => (
  <div className="home-page">
    <AboutMe />
    <BottomNav />
    <HomeHero />
  </div>
)

export default HomePage
