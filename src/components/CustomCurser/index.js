import React, { useEffect, useState } from 'react'

import './index.scss'

const CustomCurser = (props) => {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener('mousemove', onMouseOver)

    return () => {
      document.removeEventListener('mousemove', onMouseOver)
    }
  })

  const onMouseOver = (e) => setPos({ x: e.clientX, y: e.clientY })

  return (
    <div
      className="curser"
      style={{
        top: pos.y - 15,
        left: pos.x - 15,
      }}
    />
  )
}

export default CustomCurser
