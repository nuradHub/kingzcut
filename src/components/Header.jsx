import Logo from "../assets/img/kingz-cut.png";
import { useNavigate } from "react-router-dom";
import './Header.css'
import { useState } from "react";

const Header = ()=> {

  const navigate = useNavigate()

  const [toggleNav, setToggleNav] = useState(false)

  const navigateToHome = ()=> {
    navigate('/')
    setToggleNav(false)
    scrollTo(0,0)
  }
  const navigateToAbout = ()=> {
    navigate('/about')
    setToggleNav(false)
    scrollTo(0,0)
  }
  const navigateToServices = ()=> {
    navigate('/service')
    setToggleNav(false)
    scrollTo(0,0)
  }
  const navigateToBlogs = ()=> {
    navigate('/blog')
    setToggleNav(false)
    scrollTo(0,0)
  }
  const navigateToContact = ()=> {
    navigate('/contact')
    setToggleNav(false)
    scrollTo(0,0)
  }

  return(
    <div className='header-container'>
      <div className='logo-container'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='navs-container'>
        <ul className={`${toggleNav && 'toggle-navs-container'}`}>
          <li onClick={navigateToHome}>Home</li>
          <li onClick={navigateToAbout}>About</li>
          <li onClick={navigateToServices}>Services</li>
          <li onClick={navigateToBlogs}>Blogs</li>
          <li onClick={navigateToContact}>Contacts</li>
        </ul>
      </div>
      {!toggleNav && <i className="fa-solid fa-bars" onClick={()=> setToggleNav(true)} ></i>}
      {toggleNav && <i className="fa-solid fa-times" onClick={()=> setToggleNav(false)}></i>}
    </div>
  )
}
export default Header