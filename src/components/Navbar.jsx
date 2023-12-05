import React from 'react'
// import logo from '../assets/inklogo-removebg-preview.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <div className='logo-container'>
        <img src={logo} alt='Logo' className='logo' />
      </div> */}
      <a href='#' className='others'>ABOUT</a>
      <a href='#' className='others'>CONTACT</a>
      <a href='#' className='try-now'>Try Now ↗</a>
    </div>
  )
}

export default Navbar

