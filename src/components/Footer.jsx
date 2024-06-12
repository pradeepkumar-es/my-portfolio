import '../css/footer.css'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Footer(){
    return(
        <>
        <div className="footer">
            <div className="ftr-contact">
                <h3 className="contact-el">Let's Get In Touch</h3>
                <a className='contact-el' href="mailto:pradeepkumariitk22@gmail.com?subject=Contact For &body=Hi Pradeep,%20I">Contact Me</a>
                <div className="social-link">
                    <ul>
                        {/* <li>Connect with me</li> */}
                        <li title='Instagram'><a href="https://www.instagram.com/pradeepkumar.es/" target='_blank'><FaInstagram /></a></li>
                        <li title='Linkedin'><a href="https://www.linkedin.com/in/pradeepkumar-es/" target='_blank' ><FaLinkedin /></a></li>
                        <li title='Facebook'><a href="https://www.facebook.com/pradeepkumar.es/" target='_blank' ><FaFacebook /></a></li>
                    </ul>
                </div>
            </div>
            <p>&copy; 2024 Pradeep Kumar. All Rights Reserved</p>
        </div>
        </>
    )
}