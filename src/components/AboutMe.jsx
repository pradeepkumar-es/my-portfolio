import React from 'react'
import pic from "../images/pradeep-profile.jpg"
import '../css/about.css'

function AboutMe() {
  return (
    <div className='aboutme'>
      <div className="intro">
        <div className="text">
          <h1>A Glimpse into My World</h1>
          <p>I am a second-year undergraduate student
            enrolled in the prestigious Indian Institute of Technology, Kanpur,
            pursuing a degree in Biological Sciences and Bioengineering. With a profound
            dedication to learning and interest in leveraging cutting-edge technologies,
            I am passionate about exploring the boundless possibilities at the intersection of science
            and technology.</p>
        </div>
        <div className="mypic"><img src={pic} alt='Pradeep'/></div>
      </div>
      <div className="journey"></div>
    </div>
  )
}

export default AboutMe
