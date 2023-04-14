import React from 'react'
import styles  from '../style'

import Scudetto from '../assets/scudetto.svg';


const Main = () => (
  <div className='w-full py-2'>
    <img src={Scudetto} alt="" className=' mx-auto flex-justify-center  w-[25%] h-[25%]' />
    <div className='text-center font-bold font-poppins text-4xl py-4'>
        <h1>Team Formula student di Unict</h1>
    </div>
  </div>
)

export default Main 