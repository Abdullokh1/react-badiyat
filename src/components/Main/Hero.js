import React, { useState } from 'react'
import '../Hero/Hero.scss'
import SliderBtns from '../Hero/SliderBtns/SliderBtns'



export default function Hero() {
 let [sliderBtn, setSlider] = useState({
   text: 'Temuriylar davri adabiyoti',
   img: 'hero__bg__img',
   id: Math.floor(Math.random() * 10000)
 })

  return (
    <>
     <section className='hero'>
       <div className='container'>
          <div className={sliderBtn.img}>
            <div className='hero__title__wrapper col-2'>
              <h1 className='hero__title'>{sliderBtn.text}</h1>
              <ul className='d-flex m-0 p-0 list-unstyled'>
                <SliderBtns setSlider={setSlider}/>
              </ul>
            </div>
          </div>
        </div>
     </section>
    </>
  )
}
