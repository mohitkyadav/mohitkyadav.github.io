import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ErrorPage from '../ErrorPage'
import Overview from '../Overview'
import Highlights from '../Highlights'

export const routeLinks = [
  { text: 'Overview', href: '/', component: Overview },
  { text: 'Highlights', href: '/highlights', component: Highlights },
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
          {routeLinks.map((route) => (
            <Route
              exact
              path={route.href}
              component={route.component}
            />
          ))}
          <Route
            path="*"
            component={ErrorPage}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

export default withRouter(Routes)
