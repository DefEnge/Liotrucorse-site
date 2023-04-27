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
  <section className='  justify-center items-center'>
    
   
    
  {data.map((slide , index) => {
        return(
    <div className={` ${index === current  ? ' slide active' : 'slide'} flex justify-center items-center `}   >
        {index === current && (<img src={slide.image} alt="" className=' md:w-[60%] md:h-[50%] md:py-5 sm:w-[500px] sm:h-[300px] sm:rounded-[0.75rem] md:rounded-[5rem] ' />)}
        
      </div>
    )
  })}

    <div className=' flex justify-center items-center py-5'>
      
      <div className='justify-center items-center '>
      <button onClick={prevslide} className='justify-center items-center ' ><img src={arrowleft} alt="" /></button>
      </div>
      
      <div className='justify-center items-center'>
      <button onClick={nextslide} className=' '><img src={arrowright} alt="" /></button>
      </div>

    </div>


  </section>

);};

export default Hero