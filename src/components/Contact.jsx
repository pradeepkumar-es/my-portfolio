import React from 'react'
import '../css/contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
    <div className='contact'>
      <div className="contactinfo">
        <h1>Let's Get In Touch</h1>
        <p> I am open to have any suggestion or just to have a chat </p>
        <p style={{fontSize:"x-large"}}>Address:</p>
        <p><FaLocationDot/>&nbsp; Hall 5, IIT Kanpur <br />
         &nbsp; &nbsp;Uttar Pradesh, India</p>
        
        <p><a style={{textDecoration:"none"}} href="mailto:pradeepkumariitk22@gmail.com?subject=Contact For&body=Hi Pradeep,"><MdEmail/>&nbsp;pradeepkumariitk22@gmail.com</a></p>
      </div>
      <div className="contactform">
        <form className='form' action="">
          <label htmlFor="name"> Name <br /><input type='text' name="name" id="name" placeholder='Your Name'required/></label>
          <label htmlFor="email"> Email <br /><input type='email' name='email' id='email' placeholder='Your Email'required/></label>
          <label htmlFor="subject"> Subject <br /><input type="text" name='subject' id='subject' placeholder='Message Subject' required/></label>
          <label htmlFor="message"> Message <br /><textarea placeholder='type here...' name="message" id="message" rows="10"></textarea>
          </label>
          <button onClick={()=>(alert("This is not working, soon it will also work. sorry! for inconvenience"))} >Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
