import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
      setNav(!nav)
    }
      

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#ff2c2c]'>NEOBANK</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Products</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
       <h1 className='w-full text-3xl font-bold text-[#ff2c2c] m-4'>NEOBANK</h1>

        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600 '><a className='link' href="#"> Home</a></li>
          <li className='p-4 border-b border-gray-600 '><a className='link' href="#"> Company</a></li>
          <li className='p-4 border-b border-gray-600 '><a className='link' href="#"> Products</a></li>
          <li className='p-4 border-b border-gray-600 '><a className='link' href="#">About Us</a> </li>
          <li className='p-4'><a className='link' href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;