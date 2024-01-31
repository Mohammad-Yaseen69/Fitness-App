import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'

const Navbar = () => {
  return (
    <div className='w-[50%] flex justify-start items-center m-8 md:w-full'>
      <div className='flex gap-36 max-ss:gap-16 items-center'>
        <img src={Logo} alt="" className='mb-2' />
        <div className='flex gap-8'>
          <NavLink to='/' >
            <h1 className='text-2xl font-[Josefin Sans] font-bold'>Home</h1>
          </NavLink>
          <h1 className='text-2xl font-[Josefin Sans] font-bold'><a href="#exercises">Exercises</a></h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar