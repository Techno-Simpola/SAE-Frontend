import React from 'react';
import classNames from 'classnames';
import "../assets/css/events.css";
// import "../components/elements/eventsCarousel.js";

const Events = () => {
  return (
<>


 <div class="event-wrapper">
 <div class="event-hero">
  <h1 className='event-h1 stroke-shadow'>
    <a href="#">OUR EVENTS</a>
    </h1>
</div> 
</div>
<div className='heading1'>
<h1 >Drag and Drift</h1>
<p>SAE hosts a thrilling event 'Drag&Drift' which includes various maze designs with obstacles and avoiding the pesky obstacles subsequently knowing the underlying working of the car.</p>
</div>


<section class="DandD-section">
  <div class="DandDgrid">
    <div class="item">
    </div>
    <div class="item item--large">
    </div>
    <div class="item item--medium">
    </div>
    <div class="item item--large">
    </div>
    <div class="item item--medium">
    </div>
    <div class="item">
    </div>
  </div>
</section>


<div className='heading1'>
<h1 >Self Driving Vehicle</h1>
<p>Technology nowadays is only getting smarter and better as the years go by; Driverless cars are a big success.SAE in collaboration with IEEE SB conducts a workshop on developing the Self Driving vehicle prototype while mastering the fundamentals of Autonomous driving, robotics, and Algorithm designs.</p>
</div>

<section class="sdvSection">

<div class="sdv-grid">
  <div class="sdv-item item--large">
  </div>
 
  <div class="sdv-item">
  </div>
  <div class="sdv-item">
  </div>
  <div class="sdv-item item--medium">
  </div>
  <div class="sdv-item">
  </div>
  <div class="sdv-item item--medium">
  </div>
  <div class="sdv-item">
  </div>
  <div class="sdv-item">
  </div>
</div>
</section>

<div className='heading1'>
<h1 >F.I.S.T </h1>
<p>FIST Seminar: 
Technological innovations aim to transfer the cognitive load from humans to machines, freeing them to perform higher cognitive tasks and aiding in decision-making processes. SAE under the initiative of F. I.S.T(Forum of ideas on Science and Technology) conducts seminars on technical advancements.</p>
</div>
<section class="fist-section">
  <div class="fistgrid">
    <div class="fist-item">
    </div>
    <div class="fist-item item--large">
    </div>
    <div class="fist-item item--medium">
    </div>
    <div class="fist-item item--large">
    </div>
    <div class="fist-item item--medium">
    </div>
    <div class="fist-item">
    </div>
  </div>
</section>


<div className='heading1'>
<h1 >Aarhon</h1>
<p>SAE in Aarohan: 
SAE is also a part of Team Aavishkar which conducts Aarohan, NIT Durgapur's annual Techno-management fest, which includes all facets of technical and festive enthusiasm.</p>
</div>
<div class="carous-content">
      <a class="carous-card" >
    <div class="front" style={{backgroundImage: `url(https://imagizer.imageshack.com/img923/6594/Y4AlxM.jpg)`}}>
     <p>Roboliga</p>
    </div>
    <div class="back">
      <div>
        <p>It`s a celebration of human ingenuity and technological achievement. It combines the best of our physical and mental abilities with the latest in robotics technology, showcasing how far we've come in our quest to explore and conquer the universe.</p>
      </div>
    </div></a>

    <a class="carous-card">
    <div class="front" style={{backgroundImage: `url(https://imagizer.imageshack.com/img922/658/6sDJXi.jpg)`}}>
      <p>3d Printing Worshop</p>
    </div>
    <div class="back">
      <div>
        <p>Attendees will gain hands-on experience with the latest 3D printing equipment,including printers, scanners, and software. Our expert mentors will guide you through setting up a printer, creating 3D models, and troubleshooting common issues</p>
      </div>
    </div></a>
    <a class="carous-card" >
    <div class="front" style={{backgroundImage: `url(https://imagizer.imageshack.com/img923/7130/XaOhQ4.jpg)`}}>
    </div>
    <div class="back">
      <div>
       <p>This is a thrilling online maze game with twists and turns in every corner, it takes a keen eye and quick thinking to navigate your way to victory.</p>
      </div>
    </div></a>
    // <button class="custom-btn btn-5"><span><a href='/arhn'>Know More</a></span></button>
</div>


<div className='heading1'>
<h1 >TEDx</h1>
<p>TEDx: 
SAE also conducts TEDxNITDurgapur a part of TED along with 
Literary Circle, a worldwide, grassroots initiative, that aims to provide a platform for a symphony of voices from a plethora of spheres to propagate ingenious ideas and thoughts.</p>
<div class="carous-content">
      <a class="carous-card" >
    <div class="front" style={{backgroundImage: `url(https://imagizer.imageshack.com/img924/1091/Se7nja.jpg)`}}>
     
    </div>
    <div class="back">
      <div>
<p>KANTHI DUTT</p>
<p> He has been an entrepreneur since the age of 12. Having founded Spartans Media, a brand management firm, in Class VII, he stopped schooling full-time after Class X because he believed “no one could grade his knowledge.” </p>
      </div>
    </div></a>

    <a class="carous-card">
    <div class="front" style={{backgroundImage: `url(https://imagizer.imageshack.com/img924/4131/nG4SgE.jpg)`}}>
    </div>
    <div class="back">
      <div>
        <p>AANCHAL THAKUR </p>
        <p>The first Indian to win a silver medal in An Fis Alpine Skiing Race, was also the one to represent India at the 20 organized youth Olympics that took place in Innsburg</p>
      </div>
    </div></a>
    <a class="carous-card" >
    <div class="front" style={{backgroundImage: `url(https://imagizer.imageshack.com/img922/8403/LkTA7A.jpg)`}}>
    </div>
    <div class="back">
      <div>
  
      </div>
    </div></a>
    // <button class="custom-btn btn-5"><span><a href='/ted'>Know More</a></span></button>
</div>
</div>
</>
  )
}

export default Events
