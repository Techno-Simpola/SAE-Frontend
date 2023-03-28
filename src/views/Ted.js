import React from 'react';
import '../assets/css/tedCSS/home.css'
import Gallery from '../components/tedx/tedxGallery';
import img4 from '../assets/images/tedxnitdgp.png';



function ted() 
{
    return (
<div>
    <div className='transparent-background-ted'></div>
    <div className='landing'>
    <img className='img1' src='https://live.staticflickr.com/65535/52769187787_44c4b302ab_c.jpg'></img> 
    <img className='img2' src={img4}></img> 
    </div>
    <div>
    <div className="upper">
      <div className="logo">
        <div className="image">
          <div className="camp">
            <img src='https://live.staticflickr.com/65535/52768165852_a5dc725ce9.jpg' alt="Image" id="tent" />
          </div>
        </div>
      </div>
      <div className="info">
        <h1>ABOUT TEDx</h1>
        <p>
        TEDx is an independently organized equivalent to its international counterpart, TED. Resonating with TED’s mission of researching and discovering “ideas worth spreading”, TEDx aims to provide a credible platform to an emerging pool of talent at the grassroots, subsequently sparking constructive discussions locally.TEDx events are organized by curious individuals who seek to discover ideas and spark conversations in their own community.
        </p>
      </div>
    </div>
    
    <div className="lower">
      <div className="info" id="lower-info">
        <h1>SAE in TEDx</h1>
        <p>
        SAE also conducts TEDxNITDurgapur a part of TED along with Literary Circle, a worldwide, grassroots initiative, that aims to provide a platform for a symphony of voices from a plethora of spheres to propagate ingenious ideas and thoughts.
        </p>
      </div>
      <div className="slider" id="lower-img">
        <img src='https://live.staticflickr.com/65535/52768700101_42d558203a_c.jpg' alt="Image" id="slider" />
      </div>
    </div>
     </div>
  <div className='carousels'>
  <h1>Gallery</h1>
   <Gallery />
  </div>
   <div className='speakers'>
    <h1>Speakers</h1>
  <div className="team">
      
        <div  className="profile">
          <h2 className="profile__name">Aanchal Thakur</h2>
          <p>Alpine Skier</p>
          <img alt="Anita Simmons" src='https://live.staticflickr.com/65535/52769072500_306047b1b4_n.jpg' />
        </div>
    
      
        <div  className="profile">
          <h2 className="profile__name">Tapan Misra</h2>
          <p>Indian Scientist</p>
          <img alt="Profile shot for Celina Harris" src='https://live.staticflickr.com/65535/52768143952_38d7e6dc31_n.jpg' />
        </div>
      
        <div className="profile">
          <h2 className="profile__name">Kanthi Dutt</h2>
          <p>
Entrepreneur</p>
          <img alt="Profile shot for Ruby Morris" src='https://live.staticflickr.com/65535/52769096535_748520b69a_n.jpg' />
        </div>
        <div className="profile">
          <h2 className="profile__name">Pratik Gauri</h2>
          <p>
Social Entrepreneur</p>
          <img alt="Profile shot for Nicholas Castro" src='https://live.staticflickr.com/65535/52768682361_4e6a3b1dda_n.jpg'  />
        </div>
        <div  className="profile">
          <h2 className="profile__name">Kenidra Woods</h2>
          <p>
Mental Health Advocate/Social Justice Activist</p>
          <img alt="Profile shot for Marc Dixon" src='https://live.staticflickr.com/65535/52768682746_ed0a33ed4d_n.jpg' />
        </div>
        <div  className="profile">
          <h2 className="profile__name">Kishwar Chowdhury</h2>
          <p>Chef</p>
          <img alt="Profile shot for Marc Dixon" src='https://live.staticflickr.com/65535/52772790115_38b3e817ae_w.jpg' />
        </div>
        <div  className="profile">
          <h2 className="profile__name">Dr.Munish Jindal</h2>
          <p>Founder</p>
          <img alt="Profile shot for Marc Dixon" src='https://live.staticflickr.com/65535/52772375546_06039b64b1_w.jpg' />
        </div>
        <div  className="profile">
          <h2 className="profile__name">Mr.Suhas Gopinath</h2>
          <p>CEO</p>
          <img alt="Profile shot for Marc Dixon" src='https://live.staticflickr.com/65535/52771844567_2b29ebc322_w.jpg' />
        </div>
        <div  className="profile">
          <h2 className="profile__name">Jade Winters</h2>
          <p>Novelist/Director</p>
          <img alt="Profile shot for Marc Dixon" src='https://live.staticflickr.com/65535/52772633304_bee854eee1_w.jpg' />
        </div>
        <div  className="profile">
          <h2 className="profile__name">Kamna Chhibber</h2>
          <p>Head of the Department of  Mental Health</p>
          <img alt="Profile shot for Marc Dixon" src='https://live.staticflickr.com/65535/52772790055_82ccde498d_w.jpg' />
        </div>
       
        <div  className="profile">
          <h2 className="profile__name">Rupesh Mahore</h2>
          <p>Entrepreneur</p>
          <img alt="Profile shot for Marc Dixon" src='https://live.staticflickr.com/65535/52772859828_7274302060_w.jpg' />
        </div>
       
    </div>

   </div>
   <div className='members'>
    <h1>Organisers</h1>
    <div className='card-list'>
   <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768144132_3837c5e117_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Divas Gupta</p>
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768683256_ed303a5a9b_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Anurag Singh</p>
    
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769097740_6d6dbc38b3_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Anik Mondal</p>

  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768939169_18b4bdcee3_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Vishal Jaiswal</p>
    
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768144432_3696ae1eee_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Suryadip Mondal</p>
    
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769172488_073da9a01e_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Shubham Gupta</p> 
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768683566_9f139f9e06_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Aniket Panigrahi</p> 
  </div>
  </div>
   <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769172673_0ee71b3b8e_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Sukanya Dutta</p> 
  </div>
  </div>
  

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52767981077_c0293c8bee_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Satyam Shorya Jha</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768940625_2bb0d6208a_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>S Hemanth</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768004002_1a11c68c93_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Soumyadeep Das</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768989855_507cd697f9_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Souptik Das</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768581316_5e948bbcc6_w.jpg'></img> </div>
  <div className="card_title title-white">
    <p>V. Sivaji Ganesh Naidu</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768838999_c9a8ecaf6f_w.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Ayush Kumar</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769075718_9f16b7d0b9_w.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Arpan Chandra</p>
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768596866_b3c5844682_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Arani Gangopadaya</p>
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769134248_ab505e843d_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Ankita Mondal</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768599596_ca63fa83dd.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Souham Bnaerjee</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768603631_6c29ca06f5_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Koena Saha</p>
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769130293_712c2ea392_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Shivam Kumar</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769023890_c737f51ed5_w.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Sneha Chattopadhyay</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769101123_a53708378e_z.jpg'></img> </div>
  <div className="card_title title-white">
    <p>V. Manish Yadav</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769028900_6d35be9ed8_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Abhishek Sharma</p>
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769031690_f62cbffc28_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Rahul Mondal</p>
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768881894_0b1741aa1e_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>P Venkatesh</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52769045905_2ec72118d6_w.jpg'></img> </div>
  <div className="card_title title-white">
    <p>P. Chandra Sekhar</p> 
  </div>
  </div>

  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768634016_8ba58bf81e_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Leela Prasad</p> 
  </div>
  </div>
  <div className="card">
  <div className="card_image"> <img src='https://live.staticflickr.com/65535/52768144667_55a3199cd3_n.jpg'></img> </div>
  <div className="card_title title-white">
    <p>Navin Pathak</p> 
  </div>
  </div>
  </div>
    </div>
   
 </div>
    );
}
export default ted;
