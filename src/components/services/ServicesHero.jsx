import { Link, useNavigate } from "react-router-dom";
import Kinzcut from "../../assets/img/kingz-cut-main.png";
import Services from "./Services";
import '../About.css'
import './ServicesHero.css'

const ServicesHero = ()=> {

  const navigate = useNavigate()

  const navigateToAppointment = ()=> {
    navigate('/appointment')
  }

  return(
   <div className="services-hero-container">
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
            <Link to='/service'>Services</Link>
          </div>
           <button onClick={navigateToAppointment}>Make Appointment</button>
        </div>
      </section>
      <Services/>
   </div>
  )
}
export default ServicesHero