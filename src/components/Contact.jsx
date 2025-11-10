import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState('')

   const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5173' : window.location.hostname === 'kingzcut.vercel.app' ? 'https://kingzcut.vercel.app/' : 'https://nuradhub.github.io/haircut' 

  return (
    <div className="contact-container">
      <div className="contact-information">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15769.480640646043!2d7.876322632851763!3d8.845086762008632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAfter%20University%20Gate%2C%20Along%20Princess%20Sarah%20Hotel%20Keffi!5e0!3m2!1sen!2sng!4v1761256070016!5m2!1sen!2sng"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Keffi Location"
        />
        <div className="contact-us-container">
          <div className="contact-text">
            <h3>Get in touch with us & send us message today!</h3>
            <p>
              Our barbershop is the created for men who appreciate premium
              quality, time and flawless look. <br /> After University Gate,
              Along Princess Sarah Hotel Keffi kingzcut@gmail.com
              (+2348113306865, +2347013225730)
            </p>
          </div>
          <form action="https://formsubmit.co/8c2a86f2776ceceb61eedf8f77b50294" method="POST" className="contact-form">
            <div className="name-email-container">
              <input type="text" placeholder="Name" id="name" name='name' required onChange={(e)=> setName(e.target.value)}/>
              <input type="email" placeholder="Email" id="email" name='email' required/>
            </div>
            <textarea id="message" placeholder="message" name='message' required/>

            <input type="hidden" name="_autoresponse" value={`Thanks for reaching out ${name}! Your Request has been submmited Successfully. We’ve received your message and will get back to you shortly.`} />
            <input type="hidden" name="_subject" value={`New Message from ${name}`} />
            <input type="hidden" name="_template" value='table' />
            <input type="hidden" name="_captcha" value='true' />
            <input type="hidden" name="_next" value={`${baseUrl}/submit`} />
            <input type="hidden" name="_cc" value='abdulrasheedsaliu2@gmail.com,ibrahimsaliu047@gmail.com' />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;