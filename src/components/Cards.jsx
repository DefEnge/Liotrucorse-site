import React from 'react';
import Elettrica_logo from '../assets/elettrica_logo.svg';
import Informatica_logo from '../assets/informatica_logo.svg';
import Management_logo from '../assets/management_logo.svg';
import Meccanica_logo from '../assets/meccanica_logo.svg';

const Cards  = () => (
    <div className=' w-full py-[5rem] bg-white'>
        <div className='mx-auto grid grid-cols-4 gap-5 ' >
            <div className=' w-full shadow-2xl border flex-col p-4 rounded-lg hover:scale-110 duration-500'>
                <img className='w-[100%] h-[100%] object-contain mx-auto mt-[-3rem] bg-white' src={Elettrica_logo} alt="logo_elettrica" />
                <h1 className=' text-2xl font-poppins font-bold' >Elettronica</h1>
            </div>

            <div className=' w-full shadow-2xl flex-col p-4 rounded-lg hover:scale-110 duration-500'>
                <img className='w-[100%] h-[100%] object-contain mx-auto mt-[-3rem] bg-white' src={Meccanica_logo} alt="logo_elettrica" />
                <h1 className=' text-2xl font-poppins font-bold' >Meccanica</h1>
            </div>
        
            <div className=' w-full shadow-2xl flex-col p-4 rounded-lg hover:scale-110 duration-500'>
                <img className='w-[100%] h-[100%] object-contain mx-auto mt-[-3rem] bg-white' src={Informatica_logo} alt="logo_elettrica" />
                <h1 className=' text-2xl font-poppins font-bold' >Informatica</h1>
            </div>
        
            <div className=' w-full shadow-2xl flex-col p-4 rounded-lg hover:scale-110 duration-500'>
                <img className='w-[100%] h-[100%] object-contain mx-auto mt-[-3rem] bg-white' src={Management_logo} alt="logo_elettrica" />
                <h1 className=' text-2xl font-poppins font-bold' >Management</h1>
            </div>
        

        </div>
    </div>

)
   
export default Cards