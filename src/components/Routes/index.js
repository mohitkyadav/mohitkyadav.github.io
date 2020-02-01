import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
            path="/"
            component={Overview}
          />
          <Route
            exact
            path="/highlights"
            component={Overview}
          />
          <Route
            exact
            path="/random"
            component={Overview}
          />
          <Route
            exact
            path="/gyan"
            component={Overview}
          />
          <Route
            path="*"
            component={() => '404 not found anything boya!'}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

export default withRouter(Routes)
