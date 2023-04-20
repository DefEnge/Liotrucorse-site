import React from 'react'
import styles  from '../style'

import Navbar from './Navbar';
import Cards from './Cards';
import NewsProject from './NewsProject';
import Footer from './Footer';



const Main = () => (
  <div className="bg-withe w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar></Navbar>
      </div>
    </div>
    
    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
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
        <Footer></Footer>
      </div>
    </div>
  </div>
)

export default Main 