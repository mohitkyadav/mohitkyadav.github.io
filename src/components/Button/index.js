import React from 'react'

import './index.scss'

const Button = (props) => (
  <button
    className="btn"
    type="button"
  >
    <div className="btn__content">
      <div className="btn__content__text">
        {props.text || 'Button'}
      </div>
    </div>
  </button>
)

export default Button
