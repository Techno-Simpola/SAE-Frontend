import React from "react";
import Baha from "../../assets/images/Baha.jpg";
import './Baja.css'

export const Baja = () => {
  return (
    <> 

      
        <h1 id="heading-baha" >BAJA SAEINDIA</h1>
       
      <div id="baha-container">
      <div class="row">
        <div class="col-sm-6" id="img-container">
          <img src="https://linkpicture.com/q/Baha.jpg" alt="" id="baha" />
        </div>
        <div class="col-sm-6 " id="baha-para">
          Team NDORS ( NIT Durgapur Off-Road Sports ) is the official SAE BAJA
          team of NIT Durgapur representing the institute in BAJA SAEINDIA. The
          team involves a group of 25 auto-enthusiasts across different streams
          who share a common passion towards automobile engineering and racing.
          The team designs, fabricates and competes against other All-Terrain
          Vehicles at an event popularly called as BAJA SAE which is held
          annually every year at Pithampur, Indore.
          <a href="https://saenitdgp-self.vercel.app/baja">
            <button id="button-baha">Read more</button>
          </a>
        </div>
      </div>
      </div>
    </>
  );
};