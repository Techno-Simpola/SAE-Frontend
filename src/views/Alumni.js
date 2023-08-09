import React from 'react';
import "../assets/css/alumni.css";

const Alumni = () => {
  return (
    <div className='body'>
    <div className="card-alumni">
      <div className="img-bx">
        <img src="https://i.postimg.cc/dQ7zWbS5/img-4.jpg" alt="img" />
      </div>
      <div className="content">
        <div className="detail">
          <h2>Emilia Roy</h2>
          <ul className="sci">
            <li>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Alumni;
