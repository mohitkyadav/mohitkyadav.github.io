import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Routes from '../Routes'

import './index.scss'

const Root = () => (
  <div className="root">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="*">
        <div className="root__content">
          <Routes />
        </div>
      </Route>
    </BrowserRouter>
  </div>
)

export default Root
