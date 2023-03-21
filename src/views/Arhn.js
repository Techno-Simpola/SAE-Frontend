import React from 'react'
import '../assets/css/arhn.css'
import img from '../../assets/images/200w.gif'
import About from '../About_Arhn/About'
import Events from '../Events/Events'
import Team from '../Events/Team/Team'
import Gallery from '../Gallery/Gallery'
import { Member } from '../Member/Member'
import BackgroundSlider from '../BackgroundSlider/BackgroundSlider'

const Arhn = () => {
  return (
    <>
    <div className='arhn'>
     <BackgroundSlider />
    </div>
    
    <About />
   <Events />
   <Team />
   <Gallery />
   <Member />
    </>
  )
}

export default Arhn
