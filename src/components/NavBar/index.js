import React from 'react'

import Button from '../Button'

import './index.scss'

const NavBar = () => (
  <div className="navbar">
    <nav className="navbar__nav">
      <Button text="Overview" />
      <Button text="Highlights" />
      <Button text="Random" />
      <Button text="Gyan" />
    </nav>
  </div>
)

export default NavBar
