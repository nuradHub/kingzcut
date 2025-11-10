import Slide1 from "../assets/img/slide-1.jpg";
import Slide2 from "../assets/img/slide-2.jpg";
import Slide3 from "../assets/img/slide-3.jpg";
import KinzCut2 from "../assets/img/kingz-cut-main.png";
import "./Introduction.css";
import { useNavigate } from "react-router-dom";

const Introduction = () => {

  const navigate = useNavigate()

  const navigateToAbout = ()=> {
    navigate('/about')
  }
  
  return (
    <section className="intro-section">
      <div className="introduction">
        <p data-aos="fade-up" data-aos-delay="100">
          Introduction
        </p>
        <h4 data-aos="fade-up" data-aos-delay="300">
          Kingz Cut Barbing Salon <br /> <span>Since 2025</span>
        </h4>
        <img
          src={KinzCut2}
          alt="KinzCut Logo"
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <summary data-aos="fade-up" data-aos-delay="700">
          Get ready for a fresh new look at Kingz Cut Barbing Salon! Our expert
          barbers are dedicated to providing top-notch services, from precision
          cuts to stylish designs. step into our vibrant salon and experience
          the ultimate grooming experience. Book an appointment now and let us
          help you look and feel your best and refreshing
        </summary>
        <button data-aos="fade-up" data-aos-delay="900" onClick={navigateToAbout}>
          More About Us
        </button>
      </div>
      <div className="sample-haircut" data-aos="fade-up" data-aos-delay="1000">
        <img className="sample1" src={Slide1} alt="" />
        <img className="sample2" src={Slide2} alt="" />
        <img className="sample3" src={Slide3} alt="" />
      </div>
    </section>
  );
};
export default Introduction;
