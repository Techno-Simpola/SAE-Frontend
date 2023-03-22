import React from "react";
import classNames from "classnames";
import "../../assets/css/OffB.css";
import image from "../../assets/images/Divas.jpg"
import Shubham from "../../assets/images/Shubham.jpg"
import Anurag from "../../assets/images/anurag_singh.jpg"
import Aniket from "../../assets/images/Aniket.jpg"
import Satyam from "../../assets/images/Satyam_Shorya.jpg"
import Hemanth from "../../assets/images/Hemanth.jpg"
import Soumyadeep from "../../assets/images/Soumyadeep.jpg"
import Sukanya from "../../assets/images/Sukanya.jpg"
import Anik from "../../assets/images/Anik.jpg"
import Souryadip from "../../assets/images/Souryadip.jpeg"
import Shivaji from "../../assets/images/Shivaji.jpg"
import Souptik from "../../assets/images/Souptik_Das.JPG"
import Aayush from "../../assets/images/Aayush.jpg"
import Anshika from "../../assets/images/Anshika.jpeg"
import Arani from "../../assets/images/Arani.jpg"
import Ankita from "../../assets/images/Ankita.jpeg"
import sri from "../../assets/images/sri.webp"
import sneha from "../../assets/images/Sneha.jpg"


function OffB() {
  return (
    <>
      <hr className="rule" width="100px" margin="auto" />
      <div className="container pb-4">
        <div className="row blog">
          <h1 className="center mx-auto text-center py-4 heading-OffB">Office Bearers</h1>

          <div className="col-md-12">
            <div id="blogCarousel" className="carousel slide" data-ride="carousel">
              <ol className="invisible carousel-indicators">
                <li
                  data-target="#blogCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#blogCarousel" data-slide-to="1"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                        <img src={image} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Divas Gupta</h3>
                          <span className="post">President</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src= {Anurag}/>
                        </div>
                        <div className="team-content">
                          <h3 className="title">Anurag Singh</h3>
                          <span className="post">General Secretary</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Aniket} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Aniket Panigrahi</h3>
                          <span className="post">Treasurer</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Satyam}/>
                        </div>
                        <div className="team-content">
                          <h3 className="title">SSJ</h3>
                          <span className="post">Vice President</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Hemanth} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">S Hemanth </h3>
                          <span className="post">Vice President</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Souryadip} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Souryadip Mondal</h3>
                          <span className="post">Asst General Seceratry</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Sukanya} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Sukanya Dutta</h3>
                          <span className="post">Convener</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Soumyadeep} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Soumyadeep Das</h3>
                          <span className="post">Co-Convener</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Anik} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Anik Mondal</h3>
                          <span className="post">
                            Head of Corporate Communications
                          </span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg" />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Vishal Jaiswal</h3>
                          <span className="post">Operation Head</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Souptik} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Souptik Das</h3>
                          <span className="post">Operation Head</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Shivaji} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">V Shivaji Ganesh Naidu </h3>
                          <span className="post">Technical Head</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Aayush} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Aayush Kumar</h3>
                          <span className="post">Logistics Head </span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg" />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Arpan Das</h3>
                          <span className="post">Logistics Head</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Shubham}/>
                        </div>
                        <div className="team-content">
                          <h3 className="title">Shubham Gupta</h3>
                          <span className="post">Webd Head</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="our-team">
                        <div className="pic">
                          <img src={Anshika} />
                        </div>
                        <div className="team-content">
                          <h3 className="title">Anshika Chaudhary</h3>
                          <span className="post">Webd Head</span>
                        </div>
                        <ul className="social">
                          <li>
                            <a href="#" className="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="rule1" width="100px" margin="auto" /> */}
      </div>
    </>
  );
};

export default OffB;
