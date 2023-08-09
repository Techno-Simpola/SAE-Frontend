import React from 'react'
// import classNames from 'classnames';
import "../assets/css/team.css";
import 'bootstrap';
import 'react-bootstrap';
import alumini from '../assets/Teams/Alumini';

const HallofFame = () => {
  return (
    <>
        <div className="year" id="alumini">
        <h2 className="text">OUR ALUMINI</h2>
        </div>
            <div className="teamCard-upper" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            { alumini.map((element)=>{
                 return<div className="box">
                    <div className="imgBx">
                        <img src={element.url} alt="" />
                    </div>
                    <div className="card-footer">
                        <p style={{ textDecoration: "bold"}}>{`${element.name}`}</p>
                        <p>{`${element.position}`}</p>
                        <div className="social-links">
                        <a  href={element.instaLink}><i className="fab fa-instagram"></i></a>
                        <a  href={element.linkedinLink}><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                
            }) }
               

            </div>
      
    </>
  )
}

export default HallofFame;