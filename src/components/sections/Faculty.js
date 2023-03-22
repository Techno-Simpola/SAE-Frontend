import React from 'react'
import '../../assets/css/Faculty.css'
import apurba from '../../assets/images/apurba_layek.jpg'


function Faculty(){
  return (
    <>

    <div className="faculty-upper container-fluid ">
        <div className="center">
            <h1 id="heading" >Our Faculty Advisors</h1>
           
        </div>
        <div className="container cards">
            <div className="card faculty-card">
                <img src="https://nitdgp.ac.in/uploads/n_banerjee.jpg" alt="John Doe"/>
                <h3 className="card-name fac-name">Prof. N. Banarjee</h3>
                <p className="card-text">Department of Mechanical Engineering</p>
                {/* <a href="#" className="btn">About</a> */}
            </div>

            <div className="card faculty-card">
                <img src={apurba}/>
                <h3 className="card-name fac-name">Prof. Apurba Layek</h3>
                <p className="card-text">Department of Mechanical Engineering</p>
                {/* <a href="#" className="btn">About</a> */}
            </div>

            <div className="card faculty-card">
                <img src="https://nitdgp.ac.in/uploads/a8de5832739d616eafad090c7efce0b9.jpg"/>
                <h3 className="card-name fac-name"> Prof Tapas Kumar Saha</h3>
                <p className="card-text">Department of Electical Engineering</p>
                {/* <a href="#" className="btn">About</a> */}
            </div>
        </div>
    </div>
</>
  )
}

export default Faculty;
