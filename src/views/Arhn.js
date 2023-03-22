import React from 'react';
import '../assets/css/arhn.css';
// import img from '../../assets/images/200w.gif';
import About from '../components/arhn/arhnAbout';
import Events from '../components/arhn/arhnEvents';
import BackgroundSlider from '../components/arhn/BackgroundSlider';
import Gallery from '../components/arhn/arhnGallery';
import Member from '../components/arhn/arhnMembers';

const Arhn = () => {
  return (
    <>
    <div className='arhn'>
     <BackgroundSlider />
    </div>
    <About />
    <Events />
    <Gallery />
    <Member />
    </>
  )
}

export default Arhn
