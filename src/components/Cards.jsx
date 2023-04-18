import React from 'react';
import Elettrica_logo from '../assets/elettrica_logo.svg';
import Informatica_logo from '../assets/informatica_logo.svg';
import Management_logo from '../assets/management_logo.svg';
import Meccanica_logo from '../assets/meccanica_logo.svg';

const Cards  = () => (
    <div className=' w-full '>
       <div className='hidden xs:py-[5rem] xs:flex'>
            <div className='mx-auto grid grid-cols-2 gap-5 sm:grid-cols-4 ' >
                <div className=' w-full shadow-2xl flex-col p-[4rem] sm:p-4 rounded-lg hover:scale-110 duration-500'>
                    <img className='w-[100%] h-[100%] object-contain mx-auto mt-[-3rem]' src={Elettrica_logo} alt="logo_elettrica" />
                    <h1 className=' text-xl font-poppins font-bold' >Elettronica</h1>
                </div>

                <div className='w-full shadow-2xl flex-col p-[4rem] sm:p-4 rounded-lg hover:scale-110 duration-500'>
                    <img className='w-[100%] h-[100%] object-contain mx-auto mt-[-3rem]' src={Meccanica_logo} alt="logo_elettrica" />
                    <h1 className=' text-xl font-poppins font-bold' >Meccanica</h1>
                </div>
        
                <div className=' w-full shadow-2xl flex-col p-[4rem] sm:p-4 rounded-lg hover:scale-110 duration-500'>
                    <img className='w-[100%] h-[100%] object-contain mx-auto mt-[-3rem]' src={Informatica_logo} alt="logo_elettrica" />
                    <h1 className=' text-xl font-poppins font-bold' >Informatica</h1>
                </div>
        
                <div className=' w-full shadow-2xl flex-col p-[4rem] sm:p-4 rounded-lg hover:scale-110 duration-500'>
                    <img className='w-[100%] h-[100%] object-contain mx-auto mt-[-3rem]' src={Management_logo} alt="logo_elettrica" />
                    <h1 className=' text-xl font-poppins font-bold' >Management</h1>
                </div>
            </div>
        </div>

        <div className='w-full flex xs:hidden'>
            <div className='px-[8rem]'>
                <div className='flex shadow rounded-lg items-center w-[110%] my-[2rem]s'>
                    <img src={Elettrica_logo} alt="Elettrica_logo"/>
                    <h1 className='font-poppins font-medium'>Elettronica</h1>
                </div>
            
                <div className='flex shadow rounded-lg items-center w-[110%] my-[2rem]'>
                    <img src={Meccanica_logo} alt="Meccanica_logo" />
                    <h1 className='font-poppins font-medium'>Meccanica</h1>
                </div>

                <div className='flex shadow rounded-lg items-center w-[110%] my-[2rem]'>
                    <img src={Informatica_logo} alt="Informatica_logo" />
                    <h1 className='font-poppins font-medium'>Informatica</h1>
                </div>

                <div className='flex shadow rounded-lg items-center w-[110%] my-[2rem]'>
                    <img src={Management_logo}  alt="Management_logo"/>    
                    <h1 className='font-poppins font-medium text-center'>Management</h1>
                </div>
                
            </div>
        </div>

    </div>

)
   
export default Cards