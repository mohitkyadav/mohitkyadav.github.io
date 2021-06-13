import React from 'react'

import './index.scss'

const msgs = [
  { id: 0, txt: 'I am Mohit Yadav. I love programming and designing.' },
  { id: 1, txt: 'I am Mohit Yadav. I love programming and designing.' },
  { id: 2, txt: 'I am Mohit Yadav. I love programming and designing.' },
  { id: 3, txt: 'I am Mohit Yadav. I love programming and designing.' },
]

const AboutMe = () => (
  <div className="about-me">
    {msgs[0].txt}
  </div>
)

export default AboutMe
