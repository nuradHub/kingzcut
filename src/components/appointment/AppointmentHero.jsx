import { Link, useNavigate } from "react-router-dom";
import Kinzcut from "../../assets/img/kingz-cut-main.png";
import Appointment from "./Appointment";
import './AppointmentHero.css'

const AppointmentHero = ()=> {

  const navigate = useNavigate()

  const navigateToAppointment = ()=> {
    navigate('/appointment')
  }

  return(
     <div className="appointment-hero-container">
      <section className="hero-container">
        <div className="hero-content">
          <img src={Kinzcut} alt="" />
          <p>Kingzcut Barbing Salon</p>
          <h3>Where Beauty Turns Reality</h3>
        </div>
        <div className="about-header-container">
          <div className="about-header-navigation">
            <Link to='/'>Home</Link>
            <span>&gt;</span>
            <Link to='/appointment'>Appointment</Link>
          </div>
           <button onClick={(navigateToAppointment)}>Make Appointment</button>
        </div>
      </section>
      <Appointment/>
     </div>
  )
}
export default AppointmentHero