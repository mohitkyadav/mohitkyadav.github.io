import React from 'react'

import './index.scss'

const Loader = (props) => (
  <div
    className={`loader ${props.className ? props.className : ''}`}
  >
    <div className="loader__bar">
      <div className="loader__bar__progress" />
    </div>
  </div>
)

export default Loader
