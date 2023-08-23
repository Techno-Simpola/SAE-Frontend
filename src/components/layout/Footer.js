import React from 'react';
import '../../assets/css/footer.css'
import { Link, to } from 'react-router-dom';
import fb from '../../assets/images/317727_facebook_social media_social_icon.png'
import ig from '../../assets/images/instagram.png'
import li from '../../assets/images/5296501_linkedin_network_linkedin logo_icon.png'
import yt from '../../assets/images/4202041_video_youtube_logo_social_social media_icon.png'
// import PropTypes from 'prop-types';
// import classNameNames from 'classNamenames';
// import Logo from './partials/Logo';
// import FooterNav from './partials/FooterNav';
// import FooterSocial from './partials/FooterSocial';
import ScrollToTop from "react-scroll-to-top";


// const propTypes = {
//   topOuterDivider: PropTypes.bool,
//   topDivider: PropTypes.bool
// }

// const defaultProps = {
//   topOuterDivider: false,
//   topDivider: false
// }

// const Footer = ({


//   classNameName,
//   topOuterDivider,
//   topDivider,
//   ...props
// }) => {

//   const classNamees = classNameNames(
//     'site-footer center-content-mobile',
//     topOuterDivider && 'has-top-divider',
//     classNameName
//   );

//   return (
//     <footer
//       {...props}
//       classNameName={classNamees}
//     >
//       <div classNameName="container">
//         <div classNameName={
//           classNameNames(
//             'site-footer-inner',
//             topDivider && 'has-top-divider'
//           )}>
//           <div classNameName="footer-top space-between text-xxs">
//             <Logo />
//             <FooterSocial />
//           </div>
//           <div classNameName="footer-bottom space-between text-xxs invert-order-desktop">
//             <FooterNav />
//             <div classNameName="footer-copyright">Made by <Link to="">SAE-Dev</Link>. All right reserved</div>
//           </div>
//         </div>

//         <ScrollToTop smooth color='white' style={{backgroundColor: 'red', borderRadius:'50%'}} />

//       </div>

//     </footer>
//   );
// }

// Footer.propTypes = propTypes;
// Footer.defaultProps = defaultProps;

// export default Footer;



function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="useful-link">
                <h2>Useful Links</h2>
                <div className="use-links">
                 <li> &#x27a4; <Link to='/'>Home</Link> </li>
                 <li>&#x27a4; <Link to='/events'>Events</Link> </li>
                 <li>&#x27a4; <Link to='/ted'>Tedx</Link> </li>
                 <li>&#x27a4; <Link to='/arhn'>Aarohan</Link> </li>
                </div>
              </div>

            </div>
            
              <div className="social-links">
                <h2>Follow Us</h2>
                <div className="social-icons">
                 
                  <li><a href="https://www.facebook.com/SAENITD"> <img src={fb}></img> </a></li>
                  <li><a href="https://www.linkedin.com/company/sae-india-nit-dgp-collegiate-chapter/"> <img src={li}></img></a></li>
                  <li><a href="https://www.instagram.com/sae.nitd/"> <img src={ig}></img></a></li>
                  <li><a href="https://youtube.com/@saenitdurgapurcollegiatech7397"> <img src={yt}></img></a></li>
                
                </div>
            
            </div>
            <div className="col-md-3">
              <div className="address">
                <h2>Contact</h2>
                
                <div className="address-links">
                  <li className="address1"><i class='fa-solid fa-location-dot'></i>  Mahatma Gandhi Avenue,
A-Zone, Durgapur, West Bengal
Durgapur: 713209</li>
                  <li><a><i className="fa fa-phone"></i> +91 8574613029 ( Rahul Kashyap )   </a></li>
                  <li><a><i className="fa fa-phone"></i>  +91 6396277108 ( Ashutosh Kumar Singh rathore )  </a></li>
                  <li><a href='mailto:saeindia@nitdgp.ac.in' ><i className="fa fa-envelope"></i> saeindia@nitdgp.ac.in </a></li>
                </div>
              </div>
            </div>

          </div>
        </div>
        <ScrollToTop smooth color='white' style={{backgroundColor: 'red', borderRadius:'50%'}} />
      </footer>

      <section id="copy-right">
       
        <div className="copy-right-sec">Made By SAE-Dev . <i className="fa fa-copyright"></i> 
         2023  <Link>  SAE </Link>. All right reserved. 
        </div>

      </section></>
  )
}

export default Footer