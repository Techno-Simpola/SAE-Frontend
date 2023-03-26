import React, { useState } from 'react'
import "../../assets/css/arhnCSS/arhnGallery.css";
// import CloseIcon from '@material-ui/icons/Close';
import img3 from '../../assets/images/akb.JPG'
import img4 from '../../assets/images/bb.JPG'
import img2 from '../../assets/images/cc.JPG'
import img5 from '../../assets/images/dd.JPG'
import img6 from '../../assets/images/ee.JPG'
import img7 from '../../assets/images/ff.JPG'
import img8 from '../../assets/images/arhn2.jpg'
import img9 from '../../assets/images/arhn3.jpg'
import img10 from '../../assets/images/arhn4.jpg'
import img11 from '../../assets/images/arhn5.jpg'
import img12 from '../../assets/images/arhn6.jpg'
import img13 from '../../assets/images/arhn7.jpg'
import img14 from '../../assets/images/arhn8.jpg'
import img15 from '../../assets/images/arhn10.jpg'
import img16 from '../../assets/images/arhn11.jpg'

const Gallery = () => {

  let data =[
    {
      id: 1,
      imgSrc:img2,
    },

    {
      id: 2,
      imgSrc:img3,
    },

    {
      id: 3,
      imgSrc:img12,
    },
    {
      id: 4,
      imgSrc:img5,
    },

    {
      id: 5,
      imgSrc:img6,
    },

    {
      id: 6,
      imgSrc:img7,
    },
    {
      id: 7,
      imgSrc:img8,
    },
    {
      id: 8,
      imgSrc:img9,
    },
    {
      id: 9,
      imgSrc:img10,
    },
    {
      id: 10,
      imgSrc:img11,
    },
    {
      id: 11,
      imgSrc:img12,
    },
    {
      id: 12,
      imgSrc:img13,
    },
    {
      id: 13,
      imgSrc:img14,
    },
    {
      id: 13,
      imgSrc:img15,
    },
    {
      id: 13,
      imgSrc:img16,
    }

  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc)=>
  {
     setTempImgSrc(imgSrc);
     setModel(true);
  }

  return (
    <>
    <div className={model ? "model open" : "model"}>
    <img src={tempimgSrc} alt="" />
    {/* <CloseIcon onClick={()=>
    {
      setModel(false)
    }} /> */}
    </div>
      <div className="arhn_gallery">
        <div className="arhn_div_heading_new">
        <h1 className="arhn_heading_new">Image Gallery</h1>
        </div>
     {data.map((item, index)=>
     {
       return(
         <div className="pics" key={index}>
           <img src={item.imgSrc} alt="" style={{width:"100%"}} />
         </div>
       )
     })}
    </div>
     
    </>
  )
}

export default Gallery
