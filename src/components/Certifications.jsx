import React from 'react'
import '../css/certifications.css'

function Certifications(props) {
  return (
    <div className='cert'>
            <img className='cimg' src={props.cimg} alt="gdsc-certificate" />
            <p>{props.cname}</p>
    </div>
  )
}

export default Certifications
