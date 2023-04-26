import React, { useState } from 'react'
import styles from '../style'

import arrowleft from '../assets/arrow left.svg'
import arrowright from '../assets/arrow right.svg'
import { data } from '../assets/image/index.js'


const  Hero = () =>{  
 
  const [current, setcurrent] = useState(0)
  const lenght = data.length

  const nextslide = () => {
    setcurrent( current === lenght - 1 ? 0 : current + 1);
  };
    
  const prevslide = () => {
    setcurrent(current === 0 ? lenght - 1 : current - 1 );
  };
  

 return (
  <section className=' justify-center items-center'>
    
    <div className=' justify-center items-center'>
      <button onClick={prevslide} className=' ' ><img src={arrowleft} alt="" /></button>
      <button onClick={nextslide} className=' '><img src={arrowright} alt="" /></button>
    </div>
   
    
  {data.map((slide , index) => {
    return(
      <div className={index === current  ? ' slide active' : 'slide'} key={index}>
        {index === current && (<img src={slide.image} alt="" className=' sm:w-[500px] sm:h-[300px] ' />)}
        
      </div>
    )
  })}


  </section>

);};

export default Hero