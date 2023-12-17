import React from "react";
import "../../assets/css/arhnCSS/arhnAbout.css";
import img from '../../assets/images/features-split-image-01.png';
const About =()=>{
   
    return(
    <>
    <div className="arhn_about">
    <div className="arhn_upper">
      <div className="arhn_logo">
        <div className="arhn_image">
          <div className="arhn_camp">
            <img src="https://images.pexels.com/photos/16070201/pexels-photo-16070201.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" id="arhn_tent" />
          </div>
        </div>
      </div>
      <div className="arhn_info">
        <h1>ABOUT AAROHAN</h1>
        <p>
        National Institute of Technology, Durgapur has been a pioneering educational institute for above 50 years. It boasts of students who have achieved par excellence in the field of academics and organization. Aarohan is the Annual Techno-management fest of NIT Durgapur, the 2nd Largest of its kind in the whole of eastern India. It is organised by a group of young enthusiasts under the supervision of highly responsible faculties. This festival has been constantly fostering the enthusiastic students to showcase their talents and uplifting their spirits by taking parts in various events, and imbibing in them a sense of belonging to the competitive world that lies ahead, 
        </p>
      </div>
    </div>

    <div className="arhn_lower">
      <div className="arhn_info" id="arhn_lower-info">
        <h1>SAE IN AAROHAN</h1>
        <p>
        National Institute of Technology, Durgapur has been a pioneering educational institute for above 50 years. It boasts of students who have achieved par excellence in the field of academics and organization. Aarohan is the Annual Techno-management fest of NIT Durgapur, the 2nd Largest of its kind in the whole of eastern India. It is organised by a group of young enthusiasts under the supervision of highly responsible faculties. This festival has been constantly fostering the enthusiastic students to showcase their talents and uplifting their spirits by taking parts in various events, and imbibing in them a sense of belonging to the competitive world that lies ahead,
        </p>
      </div>
      <div className="arhn_slider" id="arhn_lower-img">
        <img src="https://images.pexels.com/photos/16070143/pexels-photo-16070143.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load "alt="Image" id="arhn_slider" />
      </div>
    </div>
    </div>
    </>
    )
}

export default About
