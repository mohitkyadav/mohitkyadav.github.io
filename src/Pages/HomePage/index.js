import React from 'react'
import { useLanyard } from 'react-use-lanyard'

// import BottomNav from '../../components/BottomNav'
// import HomeHero from '../../components/HomeHero'
// import AboutMe from '../../components/AboutMe'

import { Left, Right } from './components'

import './index.scss'

const HomePage = () => {
  const lanyard = useLanyard({
    userId: '391828293495816192',
  })

  if (!lanyard.isValidating) {
    // eslint-disable-next-line no-console
    console.log(lanyard.data)
  }

  return (
    <div className="home-page">
      <Left />
      <Right />
    </div>
  )
}

export default HomePage
