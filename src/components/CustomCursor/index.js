import React, { useEffect, useState } from 'react'

import './index.scss'

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  // eslint-disable-next-line
  const [size, setSize] = useState({ width: 30, height: 30 })
  const [isMouseDown, setIsMouseDown] = useState(false)

  const onMouseOver = (e) => setPos({ x: e.clientX, y: e.clientY })

  const onMouseDown = () => setIsMouseDown(true)

  const onMouseUp = () => setIsMouseDown(false)

  const onMouseLeave = () => setPos({ x: -100, y: -100 })

  useEffect(() => {
    document.addEventListener('mousemove', onMouseOver)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousemove', onMouseOver)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  })

  return (
    <div
      className={`cursor ${isMouseDown && 'cursor--down'}`}
      style={{
        top: pos.y - (size.width / 2),
        left: pos.x - (size.height / 2),
      }}
    />
  )
}

export default CustomCursor
