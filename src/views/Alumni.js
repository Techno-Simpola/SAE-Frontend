import React from 'react'
import "../assets/css/alumni.css";
import alumini from '../assets/Teams/Alumini';
const Alumni = () => {
  return (
    <>
              
        <div className="container">
        <div className="year" id="officebearers">
        <h3 className="text">Our Alumini</h3>
        </div>
            <div className="teamCard-upper" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            {alumini.map((element)=>{
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
  )
}

export default Alumni
