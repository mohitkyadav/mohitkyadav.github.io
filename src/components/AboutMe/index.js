import React, { useState, useEffect } from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './index.scss'

const msgs = [
  { id: 0, txt: 'I am Mohit Yadav. A full-time software engineer and I love to design.' },
  { id: 1, txt: 'I like creating illustrations, designs, Anime and FPS games.' },
  { id: 2, txt: 'My element is Earth. 🌱' },
]

const AboutMe = () => {
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const newCurrentText = currentText === msgs.length - 1 ? 0 : currentText + 1

    const timer = setTimeout(() => setCurrentText(newCurrentText), 6000)

    return () => {
      clearTimeout(timer)
    }
  },
  [currentText])

  return (
    <div className="about-me">

      <TransitionGroup>
        <CSSTransition
          key={msgs[currentText].id}
          appear
          timeout={1500}
          classNames="slide"
        >
          <p>
            {msgs[currentText].txt}
          </p>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
export default AboutMe
