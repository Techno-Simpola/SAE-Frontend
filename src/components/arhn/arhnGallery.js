import React, { useState } from 'react'
import 'import "../assets/css/arhnCSS/arhnGallery.css"'
import CloseIcon from '@material-ui/icons/Close';
import img2 from '../../assets/images/cc.JPG'
import img3 from '../../assets/images/dd.JPG'
import img4 from '../../assets/images/ee.JPG'
import img5 from '../../assets/images/ff.JPG'
import img6 from '../../assets/images/jj.JPG'
import img7 from '../../assets/images/akb.JPG'

const Gallery = () => {

  let data =[
    {
      id: 1,
      imgSrc:img2,
    },

    {
      id: 2,
      imgSrc:img2,
    },

    {
      id: 3,
      imgSrc:img3,
    },
    {
      id: 4,
      imgSrc:img4,
    },

    {
      id: 5,
      imgSrc:img5,
    },

    {
      id: 6,
      imgSrc:img6,
    },
    {
      id: 7,
      imgSrc:img5,
    },
    {
      id: 8,
      imgSrc:img5,
    },
    {
      id: 9,
      imgSrc:img2,
    },
    {
      id: 8,
      imgSrc:img7,
    },
    {
      id: 8,
      imgSrc:img2,
    },
    {
      id: 8,
      imgSrc:img3,
    },
    {
      id: 8,
      imgSrc:img4,
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
    <CloseIcon onClick={()=>
    {
      setModel(false)
    }} />
    </div>
    <div className="gallery">
    <h1 className="hdngng">Image Gallery</h1>
     
     {data.map((item, index)=>
     {
       return(
         <div className="pics" key={index} onClick={()=>
         {
           getImg(item.imgSrc)
         }}>
           <img src={item.imgSrc} alt="" style={{width:"100%"}} />
         </div>
       )
     })}
    </div>
     
    </>
  )
}

export default Gallery
