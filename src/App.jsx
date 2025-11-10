import {ToastContainer} from 'react-toastify'
import { Routes, Route, useLocation } from 'react-router-dom'
import React, { Suspense } from 'react'
import Loading from '/img/loading.gif'
import './App.css'

const MainContents = React.lazy(()=> import('./pages/MainContents'))
const Header = React.lazy(()=> import('./components/Header'))
const About = React.lazy(()=> import('./components/About'))
const ServicesHero = React.lazy(()=> import('./components/services/ServicesHero'))
const BlogHero = React.lazy(()=> import('./components/blog/BlogHero'))
const AppointmentHero = React.lazy(()=> import('./components/appointment/AppointmentHero'))
const Contact = React.lazy(()=> import('./components/Contact'))
const FormSubmit = React.lazy(()=> import('./pages/FormSubmit'))
const Footer = React.lazy(()=> import('./components/Footer'))
const NotFound = React.lazy(()=> import('./pages/NotFound'))


function App() {

  const location = useLocation()

   const hideHeaderFooter =
    location.pathname === '/submit' ||
    !['/', '/about', '/service', '/blog', '/contact', '/appointment'].includes(location.pathname);

  return (
    <>
      <ToastContainer/>
      <div className='app-container'>
        <Suspense fallback={<div className='loading-container'><div className='loading'><img src={Loading} alt="loading-icon" /></div></div>}>
          {!hideHeaderFooter && <Header/>}
          <Routes>
            <Route path='/' element={<MainContents/>}/>
            <Route path='service' element={<ServicesHero/>}/>
            <Route path='blog' element={<BlogHero/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='appointment' element={<AppointmentHero/>}/>
            <Route path='submit' element={<FormSubmit/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          {!hideHeaderFooter && <Footer/>}
        </Suspense>
      </div>
    </>
  )
}

export default App
