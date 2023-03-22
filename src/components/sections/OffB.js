import React from "react";
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
      <div class="container pb-4">
        <div class="row blog">
          <h1 class="center mx-auto text-center py-4">Office Bearers</h1>

          <div class="col-md-12">
            <div id="blogCarousel" class="carousel slide" data-ride="carousel">
              <ol class="invisible carousel-indicators">
                <li
                  data-target="#blogCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#blogCarousel" data-slide-to="1"></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                        <img src={image} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Divas Gupta</h3>
                          <span class="post">President</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src= {Anurag}/>
                        </div>
                        <div class="team-content">
                          <h3 class="title">Anurag Singh</h3>
                          <span class="post">General Secretary</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Aniket} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Aniket Panigrahi</h3>
                          <span class="post">Treasurer</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Satyam}/>
                        </div>
                        <div class="team-content">
                          <h3 class="title">SSJ</h3>
                          <span class="post">Vice President</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Hemanth} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">S Hemanth </h3>
                          <span class="post">Vice President</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Souryadip} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Souryadip Mondal</h3>
                          <span class="post">Asst General Seceratry</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Sukanya} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Sukanya Dutta</h3>
                          <span class="post">Convener</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Soumyadeep} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Soumyadeep Das</h3>
                          <span class="post">Co-Convener</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Anik} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Anik Mondal</h3>
                          <span class="post">
                            Head of Corporate Communications
                          </span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg" />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Vishal Jaiswal</h3>
                          <span class="post">Operation Head</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Souptik} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Souptik Das</h3>
                          <span class="post">Operation Head</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Shivaji} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">V Shivaji Ganesh Naidu </h3>
                          <span class="post">Technical Head</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Aayush} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Aayush Kumar</h3>
                          <span class="post">Logistics Head </span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src="https://i.ibb.co/L8Pj1mg/o6EuTCT6.jpg" />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Arpan Das</h3>
                          <span class="post">Logistics Head</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Shubham}/>
                        </div>
                        <div class="team-content">
                          <h3 class="title">Shubham Gupta</h3>
                          <span class="post">Webd Head</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="our-team">
                        <div class="pic">
                          <img src={Anshika} />
                        </div>
                        <div class="team-content">
                          <h3 class="title">Anshika Chaudhary</h3>
                          <span class="post">Webd Head</span>
                        </div>
                        <ul class="social">
                          <li>
                            <a href="#" class="fa fa-envelope"></a>
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
