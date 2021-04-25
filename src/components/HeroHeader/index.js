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
  </div>
)

export default HeroHeader
