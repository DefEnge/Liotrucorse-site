import React from 'react'
import styles  from '../style'

import Navbar from './Navbar';
import Imageslider from './Imageslider';
import Cards from './Cards';
import NewsHero from './NewsHero';
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
        <Imageslider></Imageslider>
      </div>
    </div>
     
    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <NewsHero></NewsHero>
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Contactmain></Contactmain>
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer></Footer>
      </div>
    </div>


  </div>
)

export default Main
