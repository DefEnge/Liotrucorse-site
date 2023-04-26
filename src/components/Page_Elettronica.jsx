import React from 'react'
import Navbar from './Navbar'
import styles from '../style'

const Page_Elettronica = () => (
  <div className="bg-withe w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar></Navbar>
    </div>
  </div>
</div>
  )


export default Page_Elettronica