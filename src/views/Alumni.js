import React from 'react';
import "../assets/css/alumni.css";
import alumini from '../assets/Teams/Alumini.js';

const Alumni = () => {
  return (
    <>
    <div>
      <h1 className='alumni-heading' style={{display:"flex", justifyContent:"center", margin:"3% auto ", padding:"auto 0"}}>MEET OUR ALUMNI</h1>
    </div>
    <div className='alumni-body container'>
      {alumini.map((element, index) => (
        <figure className="snip0078 red" key={index}>
          <img src={element.url} alt="" />
          <figcaption>
            <h6>{element.name}</h6>
            <div className="social-links">
              <a href={element.instaLink}><i className="fab fa-instagram"></i></a>
              <a href={element.linkedinLink}><i className="fab fa-linkedin-in"></i></a>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
    </>
  );
}

export default Alumni;
