import React, { useEffect, useState } from 'react'

import './index.scss'

const CustomCurser = (props) => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  // eslint-disable-next-line
  const [size, setSize] = useState({ width: 30, height: 30 })

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
        top: pos.y - (size.width / 2),
        left: pos.x - (size.height / 2),
        width: size.width,
        height: size.height,
      }}
    />
  )
}

export default CustomCurser
