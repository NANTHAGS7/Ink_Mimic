import React from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/inklogo-removebg-preview.png'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <div className='logo-container'>
        <img src={logo} alt='Logo' className='logo' />
      </div> */}
      <Link to="/about" className="others">
        {" "}
        ABOUT
      </Link>
      <Link to="/contact" className="others">
        {" "}
        CONTACT
      </Link>
      <Link to="/try-now" className="try-now">
        {" "}
        Try Now ↗️
      </Link>
    </div>
  );
};

export default Navbar;
