import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Routes, { routeLinks } from '../Routes'
import Loader from '../Loader'
import NavBar from '../NavBar'

import './index.scss'

class HeroHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hideLoader: false,
      animateOutLoader: false
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ hideLoader: true }) }, 6000)
    setTimeout(() => { this.setState({ animateOutLoader: true }) }, 5000)
  }

  render() {
    return (
      <div className="hero">
        <BrowserRouter>
          <Route path={`${process.env.PUBLIC_URL}/`}>
            <div className="hero__content">
              <Routes />
              {!this.state.hideLoader && (
                <Loader className={this.state.animateOutLoader ? 'animation-fade-out' : ''} />
              )}
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
            src="static/img/hero.jpg"
          />
        </div>
      </div>
    )
  }
}

export default HeroHeader
