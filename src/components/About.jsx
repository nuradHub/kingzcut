import { Link, useNavigate } from "react-router-dom";
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'
import Sample1 from "/img/about-1.jpg";
import Sample2 from "/img/about-2.jpg";
import Sample3 from "/img/about-3.jpg";
import Sample4 from "/img/about-4.jpg";
import Sample5 from "/img/about-5.jpg";
import Sample6 from "/img/about-6.jpg";
import Sample7 from "/img/about-7.jpg";
import Kinzcut from "../assets/img/kingz-cut-main.png";
import Video1 from "/video/v-1.mp4";
import Video2 from "/video/v-2.mp4";
import Video3 from "/video/v-3.mp4";
import Video4 from "/video/v-4.mp4";
import { useEffect } from "react";
import "./About.css";

const About = () => {

  const navigate = useNavigate()

  const videos = [{
    media: Video1,
  },{
    media: Video2
  },{
    media: Video3
  },{
    media: Video4
  }]

  const images = [{
    media: Sample1
  },{
    media: Sample2
  },{
    media: Sample3
  },{
    media: Sample4
  },{
    media: Sample5
  },{
    media: Sample6
  },{
    media: Sample7
  }]

  const navigateToAppointment = ()=> {
    navigate('/appointment')
  }

  useEffect(()=> {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      autoplayVideos: true,
      loop: true,
      plyr: {
        config: {
          sources: [{type: 'video/mp4'}]
        }
      }
    })

    return ()=> lightbox.destroy()
  },[])

  return (
    <div className="sh-container">
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
            <Link to='/about'>About Us</Link>
          </div>
           <button onClick={navigateToAppointment}>Make Appointment</button>
        </div>
      </section>
      <div className="about-body">
        <div className="recent-upload-text">
          <h4>Recent Uploads</h4>
          <p>Page <span className="page-number">1</span> of <span>1</span></p>
        </div>
        <div className="upload-contents-container">
          <div className="video-contents">
            {[...videos].map((video, index)=> 
              <a href={video.media} className="glightbox" data-type="video" data-source='local' key={index}>
                <video src={video.media} playsInline type='video/mp4' preload="metadata" ></video>
              </a>
            )}
          </div>
          <div className="image-contents">
            {[...images].map((image, index)=> 
              <a href={image.media} className="glightbox" data-type="image" data-source='local' key={index}>
                <img src={image.media} preload="metadata" />
              </a>
            )}
          </div>
          <div className="prev-next-container">
            <button>Previous</button>
            <button>Next Page</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default About;
