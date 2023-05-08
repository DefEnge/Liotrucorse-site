import React from 'react'
import styles from '../style'
import Navbar from './Navbar'
import Footer from './Footer'

const JoinUsPage = () => (
<div className="bg-white w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar></Navbar>
      
      
    </div>
  </div>

  <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer></Footer>
      </div>
  </div>

</div>    

  )


export default JoinUsPage