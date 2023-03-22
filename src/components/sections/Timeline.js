import React from "react";
import { useEffect, useRef } from "react";
import classNames from "classnames";
import '../../assets/css/Timeline.css';
import Image from "../../assets/images/aarhn.png";
import Events from "../../assets/images/events.jpg";
import Tedx from "../../assets/images/tedx.jpeg.jpg";
import SocialMedia from "../../assets/images/social_media.png"



function Timeline() {

    const facebook = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="red" height="50" width="50" xmlns="http://www.w3.org/2000/svg" style="color: red;"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>';

    const instagram = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="red" height="50" width="50" xmlns="http://www.w3.org/2000/svg" style="color: red;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>'

    const youtube = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="red" height="50" width="50" xmlns="http://www.w3.org/2000/svg" style="color: red;"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>'

    const countRef = useRef(null);

    useEffect(() => {
        const countElements = document.querySelectorAll('.count');

        countElements.forEach((element) => {
            const count = parseInt(element.textContent, 10);
            const stepDuration = 9000 / count;

            let counter = 0;
            const intervalId = setInterval(() => {
                if (counter < count) {
                    counter++;
                    element.textContent = counter;
                } else {
                    clearInterval(intervalId);
                }
            }, stepDuration);
        });
    }, []);

    return (
        <>
            <section>

                <div class="text-center">
                    <h2 className="section-heading text-uppercase p-4">Our Achievements</h2>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                {/* <p>OUR ACHIEVEMENTS</p> */}
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <div className="circle"><span className="homebox">
                                            <img src={Image} className="img" />
                                        </span></div>
                                        <div className="content">
                                            <span className="year">Aarohan</span>
                                            {/* <h3 className="title h4">Heading</h3> */}
                                            <p className="description">
                                                The vibrant college life is incomplete without a fest and constitutes a major part of the life of students. It etches a mark on the academic calendar and students look forward to the dates.
                                            </p>
                                            <div className="icon"><span></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <div className="circle"><span className="homebox"><img src={Tedx} className="img" /></span></div>
                                        <div className="content">
                                            <span className="year">TEDx</span>
                                            {/* <h3 className="title h4">Heading</h3> */}
                                            <p className="description">
                                                Sed blandit libero volutpat sed cras. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Aliquam ultrices sagittis orci a. Ipsum nunc aliquet bibendum enim facilisis.
                                            </p>
                                            <div className="icon"><span></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <div className="circle"><span className="homebox"><img src={Events} className="img" /></span></div>
                                        <div className="content">
                                            <span className="year">Our Events</span>
                                            {/* <h3 className="title h4">Heading</h3> */}
                                            <p className="description">
                                                College events shape the social and intellectual fabric of our college's campus. College students, especially freshmen, want new and authentic ways to connect.We conduct various events all the year round to stand out and improve student engagement with our event ideas
                                            </p>
                                            <div className="icon"><span></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <div className="circle"><span className="homebox"><img src={SocialMedia} className="img soc-med" /></span></div>
                                        <div className="content">
                                            <span className="year">Social Media</span>
                                            {/* <h3 className="title h4">Heading</h3> */}
                                            <div>
                                            
                                            <p className="description">
                                                Our Social Media Platforms
                                                <div className="row text-center ">
                                                <div className="svg-area">
                                                        <div dangerouslySetInnerHTML={{ __html: facebook }} />
                                                        <div className="text-light text-right bold"><span className="count" ref={countRef}>5000</span>+Likes</div>
                                                    </div>
                                                    
                                                    <div className="svg-area">
                                                        <div dangerouslySetInnerHTML={{ __html: instagram }} />
                                                        <div class="text-light text-right bold"><span className="count" ref={countRef}>500</span>+Followers</div>
                                                    </div>
                                                    
                                                    
                                                    <div className="svg-area">
                                                        <div dangerouslySetInnerHTML={{ __html: youtube }} />
                                                        <div class="text-light text-right bold"><span className="count" ref={countRef}>3000</span>+Views</div>
                                                    </div>
                                                   

                                                </div>

                                            </p>
                                            
                                            </div>
                                            <div className="icon"><span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Timeline;