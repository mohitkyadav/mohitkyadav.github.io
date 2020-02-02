import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ErrorPage from '../ErrorPage'
import Overview from '../Overview'

export const routeLinks = [
  { text: 'Overview', href: '/' },
  { text: 'Highlights', href: '/highlights' },
  { text: 'Random', href: '/random' },
  { text: 'Gyan', href: '/gyan' },
]

const Routes = ({ location }) => (
  <div>
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        appear
        timeout={600}
        classNames="slide-up"
      >
        <Switch location={location}>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Overview}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/highlights`}
            component={Overview}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/random`}
            component={Overview}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/gyan`}
            component={Overview}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/*`}
            component={ErrorPage}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

export default withRouter(Routes)
