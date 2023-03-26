import React, { useEffect, useState } from 'react'
import "../../assets/css/arhnCSS/backgroundSlider.css";


const imageSlider =[
    {
        url: 'http://localhost:3000/static/media/arhn11.1f8159d7fa04a4d7a037.jpg',
        title: 'Image Slider 1'
    },
    {
        url: 'http://localhost:3000/static/media/akb.0c06ac78ae18ac08e4a7.JPG',
        title: 'Image Slider 2'
    },
    {
        url: 'http://localhost:3000/static/media/arhn7.968ac25a7e273c7ce5d4.jpg',
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



