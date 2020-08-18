import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'

import './index.scss'

const NavBar = ({ links }) => (
  <div className="navbar">
    <nav className="navbar__nav">
      {links.map((link) => (
        <Link
          className="navbar__nav__a"
          to={link.href}
          key={link.href}
        >
          <Button text={link.text} />
        </Link>
      ))}
    </nav>
  </div>
)

export default NavBar
