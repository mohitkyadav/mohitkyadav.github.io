import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Routes from '../../Routes'
import CustomCursor from '../CustomCursor'
import TopNav from '../TopNav'

import './index.scss'

const Root = () => (
  <div className="root">
    <CustomCursor />
    <TopNav />
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
