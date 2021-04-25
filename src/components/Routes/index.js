import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { HomePage, ResumePage, ErrorPage } from '../../Pages'

export const routeLinks = [
  { text: 'me', href: '/', component: HomePage },
  { text: 'resume', href: '/resume', component: ResumePage },
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
