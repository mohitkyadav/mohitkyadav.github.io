import React from 'react'

import './index.scss'

const ErrorPage = (props) => (
  <div
    className={`error ${props.className ? props.className : ''}`}
  >
    <div className="error__code">
      404
      {' '}
      <span>or</span>
      {' '}
      WIP://
    </div>
    <div className="error__description">
      Cause I love to push to main
      <span>.</span>
    </div>
  </div>
)

export default ErrorPage
