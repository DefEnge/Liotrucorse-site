import React from 'react';
import Elettrica_logo from '../assets/elettrica_logo.svg';
import Informatica_logo from '../assets/informatica_logo.svg';
import Management_logo from '../assets/management_logo.svg';
import Meccanica_logo from '../assets/meccanica_logo.svg';

const Cards  = () => (
    <div className=' w-full xs:py-[5rem]'>
       <div className='hidden xs:flex'>
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

        <div className=' w-full flex xs:hidden' >
            <ul className='list-none '>
                <div className='flex shadow rounded-lg w-[140%] items-center px-[5rem]' >
                <li><img src={Elettrica_logo} alt="" className='' /></li>
                <h1 className='py-[18%] font-poppins font-medium'>Elettronica</h1>
                </div>

                <div className='flex shadow rounded-lg w-[140%] items-center px-[5rem]' >
                <li><img src={Meccanica_logo} alt=""  /></li>
                <h1 className='py-[18%] font-poppins font-medium'>Meccanica</h1>
                </div>

                <div className='flex shadow rounded-lg w-[140%] items-center px-[5rem]' >
                <li><img src={Informatica_logo} alt="" /></li>
                <h1 className='py-[18%] font-poppins font-medium'>Informatica</h1>
                </div>

                <div className='flex shadow rounded-lg w-[140%] items-center px-[5rem]' >
                <li><img src={Management_logo} alt=""/></li>
                <h1 className='py-[18%] font-poppins font-medium'>Management</h1>
                </div>
            </ul>
        </div>

    </div>

)
   
export default Cards