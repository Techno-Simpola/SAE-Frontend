import React from 'react';
import '../../assets/css/footer.css'
import { Link, to } from 'react-router-dom';
import SAELOGO from '../../assets/images/SAE_White.png'
import fb from '../../assets/images/317727_facebook_social media_social_icon.png'
import ig from '../../assets/images/instagram.png'
import li from '../../assets/images/5296501_linkedin_network_linkedin logo_icon.png'
import yt from '../../assets/images/4202041_video_youtube_logo_social_social media_icon.png'
import location from '../../assets/images/icons8-location-50.png'
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
    <div className='row footercontent'>
        <div className='fcol'>

          <p>
            <a href="https://www.saenitdgp.com/" className='flogo'><img src="https://www.saenitdgp.com/static/media/Logo_final.b75cdbef4fed48981612.png " className='flogo-size' alt="" /></a>
          </p>

          <h4 className='fh4'>Follow us</h4>
          <div className='ficons'>
            
            <p>
              <a href="https://www.facebook.com/SAENITD"><img src={fb} className='fsize' /></a>
            </p>

            <p>
              <a href="https://www.linkedin.com/company/sae-india-nit-dgp-collegiate-chapter"><img src={li} alt="" className='fsize' /></a>
            </p>
            <p>
              <a href="https://www.youtube.com/@saenitdurgapurcollegiatech7397"><img src={yt} alt="" className='fsize' /></a>
            </p>

            <p>
              <a href="https://www.instagram.com/sae.nitd/"><img src={ig} alt="" className='fsize' /></a>
            </p>
          </div>

        </div>

        <div className='fcol'>
          <div className='fpage'>
            <h4 className='fh4'>Useful links</h4>
              <div className='fuse-links'>
                <ul>
                
                  <li>&#x27a4;<a href="https://www.saenitdgp.com/"> <Link to='/'>Home</Link></a></li>
                  <li>&#x27a4;<a href="https://www.saenitdgp.com/events"> <Link to='/Events'> Events</Link></a></li>
                  <li>&#x27a4;<a href="https://www.saenitdgp.com/ted"> <Link to='/Ted'> Tedx</Link></a></li>
                  <li>&#x27a4;<a href="https://www.saenitdgp.com/arhn"> <Link to='/Arhn'> Aarohan</Link></a></li>
                </ul>
              </div>
           
          </div>
        </div>

        <div className='fcol'>
          <h4 className='fh4'>Contact Us</h4>
          <p>Mahatma Gandhi Avenue,A-zone</p>
          <p>Durgapur,West Bengal Durgapur: 713209</p>
          <a href="mailto:saeindia@nitdgp.ac.in" className='femail'><i className='fa fa-envelope'></i>saeindia@nitdgp.ac.in</a>
        </div>


        <div className='foffice'>
          <h4 className='fh4'>Rahul Kashyap </h4>
          <h5 className='fh5'>(President)</h5>
          <a href="mailto:president.saeindia@nitdgp.ac.in " className='femail'> <i className='fa fa-envelope'> </i>president.saeindia@nitdgp.ac.in</a>
          <p><i className='fa fa-phone'></i>+91 8574613029</p>

          <h4 className='fh4'>Ashutosh Kumar Singh Rathore </h4>
          <h5 className='fh5'>(Head of Corporate Communition)</h5>
          <a href="mailto:rathoreasutosh3006@gmail.com" className='femail'><i className='fa fa-envelope'></i>rathoreasutosh3006@gmail.com</a>
          <p><i className='fa fa-phone'></i>+91 6396277108</p>

        </div>

      </div>

      

    </footer>
      
      { <section id="fcopy-right">
       
        <div className="fcopy-right-sec">Made By SAE-Dev . <i className="ffa fa-copyright"></i> 
         2023  <Link>  SAE </Link>. All right reserved. 
        </div>

      </section> }
      </>
  )
}

export default Footer