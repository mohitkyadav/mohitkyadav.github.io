import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Routes, { routeLinks } from '../Routes'
import NavBar from '../NavBar'

import './index.scss'

const Root = () => (
  <div className="root">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="*">
        <div className="root__content">
          <Routes />
          <div className="root__content__nav">
            <NavBar links={routeLinks} />
          </div>
        </div>
      </Route>
    </BrowserRouter>
  </div>
)

export default Root
