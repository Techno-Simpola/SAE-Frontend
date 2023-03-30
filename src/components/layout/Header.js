import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import SAELOGO from '../../assets/images/SAE_White.png'
import '../../assets/css/header.css'
import Final_logo from '../../assets/images/Logo_final.png'
import Home from '../../views/Home';
import Team from '../../views/Team';
import Events from '../../views/Events';
import Arhn from '../../views/Arhn';
import Ted from '../../views/Ted';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setCurrentPage(pathName);
  }, []);
    
const toggle = () => setIsOpen(!isOpen);



  return (
    <div className="tedNavbar">
        <span className="nav-logo"><img src={Final_logo} id="header-logo"></img></span>
      <div className={`nav-items ${isOpen && "open"}`}
      
      
      >
      <Link onClick={toggle} to='/' className={currentPage === "/" ? "active" : ""}>Home</Link>
      <Link onClick={toggle} to='events' className={currentPage === "/events" ? "active" : ""}>Events</Link>
        <Link onClick={toggle} to="/team">Teams</Link>
        <Link  onClick={toggle} to="/ted">TEDx</Link>
        <Link  onClick={toggle} to="/arhn">Aarohan</Link> 



        {/* <li className={currentPage === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={currentPage === "/events" ? "active" : ""}>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/ted">Tedx</Link>
        </li>
        <li>
          <Link to="/arhn">Aarohan</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li> */}
      
    
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;