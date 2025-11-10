import KinzCut2 from "../../assets/img/kingz-cut-main.png";
import Footer from "../Footer";
import Header from "../Header";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-container">
      <div className="services-header">
        <p data-aos="fade-up" data-aos-delay="100">
          Kingz Cut & Spa
        </p>
        <h4 data-aos="fade-up" data-aos-delay="300">
          Our Services
        </h4>
      </div>
      <div className="services" data-aos="fade-up" data-aos-delay="500">
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Haircut Cut and Dye</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Facial Scrub</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Shaving & Carving</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Texturing</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Foot Massage/Head Massage</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Manicure/Pedicure</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Facial Treatment</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Home Service</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
        <div className="service">
          <img src={KinzCut2} alt="" />
          <h3>Texturing</h3>
          <summary>Allow Kingz cut barbing to change your look.</summary>
        </div>
      </div>
    </section>
  );
};
export default Services;
