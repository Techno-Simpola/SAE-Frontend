import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import SAELOGO from '../../assets/images/saeLogo.png'
import '../../assets/css/header.css'

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

  return (
    <div className="tedNavbar">
        <span className="nav-logo"><img src={SAELOGO} id="header-logo"></img></span>
      <div className={`nav-items ${isOpen && "open"}`}
      
      
      >
      <Link to='/' className={currentPage === "/" ? "active" : ""}>Home</Link>
      <Link to='events' className={currentPage === "/events" ? "active" : ""}>Events</Link>
        <Link to="/team">Teams</Link>
        <Link to="/ted">TEDx</Link>
        <Link to="/arhn">Aarohan</Link> 



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