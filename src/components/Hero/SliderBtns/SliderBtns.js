import React from 'react'
import './SliderBtns.scss'

export default function SliderBtns({slideHandler, setSlider}) {


    const firstSlider = () =>{
      setSlider({
        text: 'Temuriylar davri adabiyoti ',
        img: 'hero__bg__img'
      })
    }
  
    const secondSlider = () =>{
      setSlider({
        text: 'Abdulla Qodiriy tarixi',
        img: 'hero__bg__img--second'
      })
    }
  
    const thirdSlider = () =>{
      setSlider({
        text: 'Abdurauf Fitrat tarixi',
        img: 'hero__bg__img--third'
  
      })
    }
  
    const fourthSlider = () =>{
      setSlider({
        text: 'Nusrat Rahmat tarixi',
        img: 'hero__bg__img--fourth'
  
      })
    }

    
  
  return (
    <>
     <li>
       <button onClick={firstSlider} ><span className='hero__btn__icon'></span></button>
     </li>
     <li>
       <button onClick={secondSlider}><span className='hero__btn__icon'></span></button>
     </li>
     <li>
       <button onClick={thirdSlider}><span className='hero__btn__icon'></span></button>
     </li>
     <li>
       <button onClick={fourthSlider}><span className='hero__btn__icon'></span></button>
     </li>
     
    </>
  )
}
