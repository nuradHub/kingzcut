import AOS from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../assets/img/slide-1.jpg";
import Slide2 from "../assets/img/slide-2.jpg";
import Slide3 from "../assets/img/slide-3.jpg";
import IB from "../assets/img/ib.jpg";
import Abdul from "../assets/img/abdul.jpg";
import Nurad from "../assets/img/nurad.jpg";
import { useEffect, useState } from "react";
import Blogs from "../components/blog/Blogs";
import "./MainContents.css";
import "aos/dist/aos.css";
import Introduction from "../components/Introduction";
import Services from "../components/services/Services";
import Appointment from "../components/appointment/Appointment";
import { useNavigate } from "react-router-dom";

const MainContents = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate()

  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    pauseOnHover: false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };
  const setting2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: Slide1,
      text: "Its Not Just an Haircut, Its an Experience",
      title: "Being a Barber is about taking care of the people.",
      description:
        "Our Barbershop is the territory created purely for men and women who appreciate premium quality, time and flawless look.",
    },
    {
      image: Slide2,
      text: "Classic Hair Style & Shaves",
      title: "Our hair styles enhances your style",
      description:
        "Our Barbershop is the territory created purely for men and women who appreciate premium quality, time and flawless look.",
    },
    {
      image: Slide3,
      text: "Its Not Just an Haircut, Its an Experience",
      title: "Where mens whats to look there very best",
      description:
        "Our Barbershop is the territory created purely for men and women who appreciate premium quality, time and flawless look.",
    },
  ];

  const navigateToAppointment = ()=> {
    navigate('/appointment')
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      delay: 500,
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <section className="slide-container">
          <Slider {...setting}>
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <img src={slide.image} alt={`slide-${index}`} />
                <div
                  className={`text-container ${
                    index === activeSlide && "active"
                  }`}
                >
                  <p>{slide.text}</p>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <button onClick={navigateToAppointment}>Make Appointment</button>
                </div>
              </div>
            ))}
          </Slider>
        </section>
        <Introduction />
        <Services />
        <Appointment />
        <section className="barber-container">
          <div className="barber-header">
            <p data-aos="fade-up" data-aos-delay="100">
              Kingz Cut & Spa
            </p>
            <h4 data-aos="fade-up" data-aos-delay="300">
              Our Barbers
            </h4>
          </div>
          <div className="barber" data-aos="fade-up" data-aos-delay="500">
            <img src={IB} alt="" />
            <div className="barber-info">
              <h3>Saliu Ibrahim</h3>
              <p>Professional Barber</p>
            </div>
          </div>
        </section>
        <section
          className="testimonial-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-slider">
            <Slider {...setting2}>
              <div>
                There are design companies, and then there are user experience
                design interface design
              </div>
              <div>
                There are design companies, and then there are user experience
                design interface design
              </div>
              <div>
                There are design companies, and then there are user experience
                design interface design
              </div>
            </Slider>
          </div>
        </section>
        <section className="price-container">
          <div className="price-header">
            <p data-aos="fade-up" data-aos-delay="100">
              Kingz Cut & Spa
            </p>
            <h4 data-aos="fade-up" data-aos-delay="300">
              Our Barbing Price
            </h4>
          </div>
          <div className="prices" data-aos="fade-up" data-aos-delay="500">
            <div className="price">
              <div className="service-title">Hair Styling</div>
              <div className="price-info">
                <h3>Hair Cut</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Hair Cut & Dye</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Black Dye</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Color Dye</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Pedicure</h3>
                <p>&#8358;____</p>
              </div>
            </div>
            <div className="price">
              <div className="service-title">Shaving</div>
              <div className="price-info">
                <h3>Shaving</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Carving</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Re-locking of Dreadlocks</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Texturing</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Facial Treatment</h3>
                <p>&#8358;____</p>
              </div>
            </div>
            <div className="price">
              <div className="service-title">Massage</div>
              <div className="price-info">
                <h3>Facial Scrub</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Foot Massage</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Head Massage</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Manicure</h3>
                <p>&#8358;____</p>
              </div>
              <div className="price-info">
                <h3>Home Service</h3>
                <p>&#8358;____</p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="recommend-kingzcut"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="recommend">
            <h4 data-aos="fade-up" data-aos-delay="300">
              Making You Look Good <br /> Is In Our Haritage.
            </h4>
            <div
              className="appointment-button"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <button onClick={navigateToAppointment}>Make Appointment</button>
            </div>
          </div>
        </section>
        <Blogs />
        <section className="ceo-dev-container">
          <div className="ceo-dev-header">
            <p data-aos="fade-up" data-aos-delay="100">
              Kingz Cut & Spa
            </p>
            <h4 data-aos="fade-up" data-aos-delay="300">
              CEO/DEVELOPER
            </h4>
          </div>
          <div className="ceo-dev-content">
            <div
              className="ceo-kingzcut"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={Abdul} alt="" />
              <div className="ceo-info">
                <h3>Saliu Abdulrasheed</h3>
                <p>Economist</p>
              </div>
            </div>
            <div
              className="dev-kingzcut"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={Nurad} alt="" />
              <div className="dev-info">
                <h3>Saliu Nurudeen (nuradhub)</h3>
                <p>Website Developer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default MainContents;
