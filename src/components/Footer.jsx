import React from 'react'
import logounict from '../assets/logounict.svg'
import Logo from '../assets/Logobianco.svg';
import LogoInsta from '../assets/instagrambianco.svg';
import LogoTwitter from '../assets/twitterbianco.svg';
import LogoGit from '../assets/githubbianco.svg';


const  Footer = () =>  (
    
    <div className='h-[15%] grid grid-cols-2 '>
 
     <div className='  grid grid-rows-2'>
        <div className='pt-5 '>
        <img src={Logo} className=' w-[50%] h-[50%]' alt="" />
        </div>
    
        <div className='pr-5'>
          <img src={logounict} className=' justify-start  w-[60%] h-[60%]' alt="" />
        </div>
      </div>

    
      <div className='grid grid-rows-2 justify-end '>
        
        <div className='flex items-center align-middle'>
          <h1 className='text-white font-poppins '>Instagram</h1>
          <img src={LogoInsta}  className='' alt="" />
        </div>

        <div className='flex items-center align-middle '>
          <h1 className='text-white font-poppins px-1'> Twitter</h1>
          <img src={LogoTwitter} className='h-[25%] w-[25%]' alt="" />
        </div>

        <div className='flex items-center align-middle'>
          <h1 className='text-white font-poppins '> Github</h1>
          <img src={LogoGit} className=' ' alt="" />
        </div>


      </div>
    
    </div>

  )
export default Footer