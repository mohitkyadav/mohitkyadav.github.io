import React, { useState, useEffect } from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './index.scss'

const msgs = [
  { id: 0, txt: 'I am Mohit Yadav. I love programming and designing.' },
  { id: 1, txt: 'I like creating illustrations, designs and I like FPS PC games.' },
  { id: 2, txt: 'I am also into Anime and Manga.' },
  { id: 3, txt: 'My element is Water. Life starts from water.' },
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
          timeout={2000}
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
