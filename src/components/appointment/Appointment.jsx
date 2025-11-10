import { useState } from "react";
import ShavingImage from "../../assets/img/book-bg.jpg";
import "./Appointment.css";

const Appointment = () => {

  const [name, setName] = useState('')

  const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5173' : window.location.hostname === 'kingzcut.vercel.app' ? 'https://kingzcut.vercel.app/' : 'https://nuradhub.github.io/haircut'  

  return (
    <section className="appointment-section">
      <div className="shaving-image" data-aos="fade-up" data-aos-delay="500">
        <img src={ShavingImage} alt="" />
      </div>
      <div className="book-appointment" data-aos="fade-up" data-aos-delay="500">
        <div className="appointment-form">
          <h4>Make an Appointment</h4>
          <p>
            Book an appointment now and let us help you look and feel your best
            and refreshing
          </p>
          <form action="https://formsubmit.co/8c2a86f2776ceceb61eedf8f77b50294" method="POST">
            <div className="text-email-inputs">
              <input type="text" name="name" id="name" placeholder="name" required onChange={(e)=> setName(e.target.value)} />
              <input type="email" name="email" id="email" placeholder="email" required />
            </div>
            <div className="tel-time-inputs">
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="phone number"
                required
              />
              <input type="time" name="time" id="time" placeholder="time" required />
            </div>
            <div className="select-services">
              <select name="services" id="services" defaultValue="" required>
                <option value="" disabled>
                  Select Service
                </option>
                <option value="Hair Styling">Hair Styling</option>
                <option value="Black/Color Dye">Black/Color Dye</option>
                <option value="Shaving">Shaving</option>
                <option value="Facial Treatment">Facial Treatment</option>
                <option value="Re-Locking Dreadlocks">
                  Re-Locking Dreadlocks
                </option>
                <option value="Texturing">Texturing</option>
                <option value="Massage">Massage</option>
                <option value="Pedicure/Manicure">Pedicure/Manicure</option>
              </select>
              <select name="barber" id="barber" defaultValue="" required>
                <option value="" disabled>
                  Select Barber
                </option>
                <option value="Ibrahim (IB)">Mr. Ibrahim (IB)</option>
              </select>
            </div>
            <select name="location" id="location" defaultValue="" required>
              <option value="" disabled>
                Select Location
              </option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Abuja">Abuja</option>
            </select>
            <input type="date" name="date" id="date" required />
            
            <input type="hidden" name="_autoresponse" value={`Thanks for reaching out ${name}! Your Request has been submmited Successfully. We’ve received your message and will get back to you shortly.`} />
            <input type="hidden" name="_subject" value='New Haircut Booking Request' />
            <input type="hidden" name="_template" value='table' />
            <input type="hidden" name="_captcha" value='true' />
            <input type="hidden" name="_next" value={`${baseUrl}/submit`} />
            <input type="hidden" name="_cc" value='abdulrasheedsaliu2@gmail.com,ibrahimsaliu047@gmail.com' />
            <div className="button-container">
              <button>Submit Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment
