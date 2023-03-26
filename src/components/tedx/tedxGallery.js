
import React, { useState } from 'react';
import '../../assets/css/tedCSS/style.css';
// import CloseIcon from '@material-ui/icons/Close';

import img4 from '../../assets/images/g1.JPG'
import img2 from '../../assets/images/g2.JPG'
import img3 from '../../assets/images/g3.JPG'
import img5 from '../../assets/images/g4.JPG'
import img6 from '../../assets/images/g5.JPG'
import img7 from '../../assets/images/g6.jpg'

const Gallery = () => {

  let data =[
    {
      id: 1,
      imgSrc:'https://live.staticflickr.com/65535/52769190048_b589abcc80_c.jpg',
    },

    {
      id: 2,
      imgSrc:'https://live.staticflickr.com/65535/52768957679_875b7065c1_c.jpg',
    },

    {
      id: 3,
      imgSrc:'https://live.staticflickr.com/65535/52768700661_5d6d983237_c.jpg',
    },
    {
      id: 4,
      imgSrc:'https://live.staticflickr.com/65535/52768701691_ccd069e105_c.jpg',
    },

    {
      id: 5,
      imgSrc:'https://live.staticflickr.com/65535/52768161762_c06344eb08_c.jpg',
    },

    {
      id: 6,
      imgSrc:'https://live.staticflickr.com/65535/52768702236_90e0bb9373_c.jpg',
    },
    {
      id: 7,
      imgSrc:'https://live.staticflickr.com/65535/52768958789_1708a3f57d_c.jpg',
    },
    {
      id: 8,
      imgSrc:'https://live.staticflickr.com/65535/52769117385_47e90cf55c_c.jpg',
    },
    {
      id: 9,
      imgSrc:'https://live.staticflickr.com/65535/52768164462_afd9f3ec93_c.jpg',
    },

    {
      id: 10,
      imgSrc:'https://live.staticflickr.com/65535/52770039962_72bc8e3de0_z.jpg',
    },

    {
      id: 11,
      imgSrc:'https://live.staticflickr.com/65535/52770988935_63073728a2_z.jpg',
    },

    {
      id: 12,
      imgSrc:'https://live.staticflickr.com/65535/52770053252_c8911f0b4e_z.jpg',
    },

    {
      id: 13,
      imgSrc:'https://live.staticflickr.com/65535/52770069412_3ab2652edd_z.jpg',
    },

    {
      id: 14,
      imgSrc:'https://live.staticflickr.com/65535/52771011640_f8405c4fa0_n.jpg',
    },

    {
      id: 15,
      imgSrc:'https://live.staticflickr.com/65535/52770039962_72bc8e3de0_z.jpg',
    },

    {
      id: 16,
      imgSrc:'https://live.staticflickr.com/65535/52770863104_7d5f462733_z.jpg',
    },

    {
      id: 17,
      imgSrc:'https://live.staticflickr.com/65535/52770845889_2a48f7a59f_z.jpg',
    },

    {
      id: 18,
      imgSrc:'https://live.staticflickr.com/65535/52770845889_2a48f7a59f_z.jpg',
    },
    {
      id: 18,
      imgSrc:'https://live.staticflickr.com/65535/52771023680_9c71d6edfa.jpg',
    },
    


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
    <div className="gallery">
     
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
