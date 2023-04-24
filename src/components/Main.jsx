import React from 'react'
import styles  from '../style'

import Navbar from './Navbar';
import Hero from './Hero';
import Cards from './Cards';
import NewsProject from './NewsProject';
import Footer from './Footer';
import Contactmain from './Contactmain';


const Main = () => (
  <div className="bg-white w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar></Navbar>
      </div>
    </div>
    
    <div className={` bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>
    
    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Cards></Cards>
      </div>
    </div>
     
    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <NewsProject></NewsProject>
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Contactmain></Contactmain>
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer></Footer>
      </div>
    </div>


  </div>
)

export default Main
