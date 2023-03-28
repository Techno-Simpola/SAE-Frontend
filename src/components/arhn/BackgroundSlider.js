import React, { useEffect, useState } from 'react'
import "../../assets/css/arhnCSS/backgroundSlider.css";


const imageSlider =[
    {
        url: 'https://live.staticflickr.com/65535/52777017494_c596d0d092_z.jpg',
        title: 'Image Slider 1'
    },
    {
        url: 'https://live.staticflickr.com/65535/52777017524_df91386e0e_z.jpg',
        title: 'Image Slider 2'
    },
    {
        url: 'https://live.staticflickr.com/65535/52777017544_5595c4aa3d_w.jpg',
        title: 'Image Slider 3'
    },
]


const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0)
    
    useEffect(()=>
    {
        const timer = setTimeout(()=>
        {
            if(currentState===2)
            {
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return ()=>
        {
            clearTimeout(timer)
        }
    }, [currentState])

    const bgImageStyle = {
        backgroundImage: `url(${imageSlider[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        width:"100vw",
        height:'100%'
    }

        const goToNext = (currentState)=>
        {
            setCurrentState(currentState)
        }

   
  return (
    <>
    <div className='contain-style'>
      <div style={bgImageStyle} ></div>
      <div className="transparent-background"></div>
    </div>

    <div className="carousel-boult">
        {
            imageSlider.map((imageSlider, currentState)=>(
            
                <span key={currentState} onClick={()=> goToNext(currentState)
                }></span>
            ))
        }
    </div>
    </>
  )
}

export default BackgroundSlider



