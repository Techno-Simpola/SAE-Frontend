import React from "react";
import classNames from 'classnames';
import "../assets/css/team.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'react-bootstrap';
import finalYear from "../assets/Teams/finalYear.js"
import prefinalYear from "../assets/Teams/prefinalYear.js"
import secondYear from "../assets/Teams/secondYear.js"
const Team = () => {
    
    return (
        <>
        <div className="heading-team">
            <h2 className="heading">OUR TEAM</h2>
        </div>
    <div style={{marginTop:"30px"}}>
        <div class="navbar">
          <a href="#officebearers">OFFICE BEARERS</a>
          <a href="#seniors">SENIOR COORDIANTOR</a>
          <a href="#juniors">JUNIOR COORDIANTOR</a>
          
        </div> 

    </div>
        

        
        <div>
        <div className="year" id="officebearers">
        <h2 className="text">OFFICE BEARERS </h2>
        </div>
            <div className="teamCard-upper" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            {finalYear.map((element)=>{
                return <div className="box">
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

                
            })}
               

            </div>
        </div>

        <div>
        <div className="year" id="seniors">
        <h2 className="text">SENIOR COORDINATORS </h2>
        </div>
            <div className="teamCard-upper" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            {prefinalYear.map((element)=>{
                return <div className="box">
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

                
            })}
               

            </div>
        </div>

        <div>
        <div className="year" id="juniors">
        <h2 className="text">JUNIOR COORDINATORS</h2>
        </div>
            <div className="teamCard-upper" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            {secondYear.map((element)=>{
                return <div className="box">
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

                
            })}
               

            </div>
        </div>
        </>
    );
}

export default Team;