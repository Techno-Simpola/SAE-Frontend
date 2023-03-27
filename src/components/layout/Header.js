import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import SAELOGO from '../../assets/images/saeLogo.png'
import '../../assets/css/header.css'



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
      <a href='/' className={currentPage === "/" ? "active" : ""}>Home</a>
      <a href='events' className={currentPage === "/events" ? "active" : ""}>Events</a>
        <a href="/team">Teams</a>
        <a href="/ted">TEDx</a>
        <a href="/arhn">Arhn</a>
    
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