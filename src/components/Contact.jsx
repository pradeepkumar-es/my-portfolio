import React from 'react'
import '../css/contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Contact() {
  //State 
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  // console.log(formData)
  function handleChange(event) {
    const { name, value } = event.target //object destructuring
    setFormData((prevFormData) => (
      {
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: value   //using object destructuring
      }
    ))
  }


//<=====  Sending data to firebase console  ======>
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent to save it into browser tab 
    const { name, email, subject, message } = formData;
    if(name && email && subject && message) {
      const res = await fetch("https://my-portfolio-a3704-default-rtdb.asia-southeast1.firebasedatabase.app/contactFormData.json", //contactFormData.json added later
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              name,
              email,
              subject,
              message
            }
          )
        }
      )
        if(res){
          setFormData(
            {
              name: "",
              email: "",
              subject: "",
              message: ""
            }
          )
          alert("Thankyou, Your Message Sent Successfully! I will response you soon.")
      }
    } else alert("Please Fill Your data")
  }

  return (
    <div className='contact'>
      <div className="contactinfo">
        <h1>Let's Get In Touch</h1>
        <p> I am open to have any suggestion or just to have a chat </p>
        <p style={{ fontSize: "x-large" }}>Address:</p>
        <p><FaLocationDot />&nbsp; Hall 5, IIT Kanpur <br />
          &nbsp; &nbsp;Uttar Pradesh, India</p>

        <p><a style={{ textDecoration: "none" }} href="mailto:pradeepkumariitk22@gmail.com?subject=Contact For&body=Hi Pradeep,"><MdEmail />&nbsp;pradeepkumariitk22@gmail.com</a></p>
      </div>
      <div className="contactform">
        {/* <form className='form' onClick={handleSubmit} > */}
        <form className='form' action='Post'>
          <label htmlFor="name"> Name <br />
            <input
              type='text'
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              required />
          </label>

          <label htmlFor="email"> Email <br />
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              required />
          </label>

          <label htmlFor="subject"> Subject <br />
            <input
              type="text"
              name='subject'
              id='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Message Subject'
              required />
          </label>

          <label htmlFor="message"> Message <br />
            <textarea
              placeholder='type here...'
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="10"></textarea>
          </label>
          <button type="submit" onClick={handleSubmit} >Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
