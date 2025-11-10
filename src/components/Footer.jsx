import KinzCut2 from "../assets/img/kingz-cut.png";
import InstagramImage from "../assets/img/instagram.png";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = ()=> {
  return(
    <div className='footer-container'>
      <div className='contact-info'>
        <div className="more-about-kingzcut">
          <img src={KinzCut2} alt="" />
          <p>Our barbershop is the created for men and women who appreciate premium quality, time and flawless look.
          </p>
          <div className="kingz-cut-icon"><a href="https://www.instagram.com/kingzcut_?igsh=dmlpZWp1Mml4NGVv"><img src={InstagramImage} alt="instagram icon" /></a></div>
        </div>
        <div className="head-quarters-address">
          <h3>Headquarter</h3>
          <div className="head-quarter">
            <p>After University Gate, Along Princess Sarah Hotel Keffi</p>
            <p>kingzcut@gmail.com (+2348113306865, +2347013225730)</p>
          </div>
        </div>
        <div className="opening-hours-container">
          <h3>Opening Hours</h3>
          <div className="opening-hours">
            <p>Monday - Friday 8:30am - 10:00pm</p>
            <p>Saturday - Sunday 9:00am - 10:00pm</p>
          </div>
        </div>
      </div>
      <div className='copyright-container'>
        <div className='copy-right'>&copy;2025 Barber Shop Designed by Nuradhub <br/> developer: +2348147999403</div>
        <div className='more-info'>
          <Link to='/appointment' onClick={()=> scrollTo(0,0)}>Orders</Link>
          <Link to='/' onClick={()=> scrollTo(0,0)}>Terms</Link>
          <Link to='/contact' onClick={()=> scrollTo(0,0)}>Report Problem</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer