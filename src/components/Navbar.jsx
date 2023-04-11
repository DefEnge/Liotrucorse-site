import {useState} from 'react'

import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import {navLinks} from '../constants';


const Navbar = () => {
  const [toggle, setToogle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    <a href="#"><h1 className=' text-white font-poppins font-bold cursor-pointer text-[25px]'> Liotru Corse</h1></a>
    <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) =>(
           <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0'  : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
           </li>   
        ))}
    </ul>

    <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={ toggle ? close : menu } alt="menu" className="w-[29px] h-[28px] object-contain bg-white" onClick={() => setToogle((prev) => (!prev))}/>
    </div> 
 
    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar   `}>
    <ul className="list-none flex flex-col justify-end items-center flex-1 ">
        {navLinks.map((nav, index) =>(
           <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0'  : 'mb-4'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
           </li>   
        ))}
    </ul>
    </div>


    </nav>
  )
}

export default Navbar