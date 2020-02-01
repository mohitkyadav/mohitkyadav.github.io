import React from 'react'

import './index.scss'

const ErrorPage = (props) => (
  <div
    className={`error ${props.className ? props.className : ''}`}
  >
    <div className="error__code">
      404
    </div>
  </div>
)

export default ErrorPage
