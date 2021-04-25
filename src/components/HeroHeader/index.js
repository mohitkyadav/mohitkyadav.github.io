import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Routes, { routeLinks } from '../Routes'
import NavBar from '../NavBar'

import './index.scss'

const HeroHeader = () => (
  <div className="hero">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="*">
        <div className="hero__content">
          <Routes />
          <div className="hero__content__nav">
            <NavBar links={routeLinks} />
          </div>
        </div>
      </Route>
    </BrowserRouter>
    <div className="hero__bg">
      <img
        className="hero__bg__img"
        alt="Mohit K.Yadav"
        src="https://github.com/mohitkyadav.png"
      />
    </div>
  </div>
)

export default HeroHeader
