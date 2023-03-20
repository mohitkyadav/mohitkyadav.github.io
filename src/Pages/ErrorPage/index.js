import React from 'react'

import './index.scss'

const ErrorPage = (props) => (
  <div
    className={`error ${props.className ? props.className : ''}`}
  >
    <div className="error__code">
      (☞ﾟヮﾟ)☞ 444
    </div>
    <div className="error__description">
      ...
    </div>
  </div>
)

export default ErrorPage
