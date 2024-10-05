import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex justify-between h-3'>
        <div>
        </div>
        <div>
            <p className='font-medium'>Desenvolvido @Romulo Paiva</p>
        </div>
        <div className='align-middle justify-center'>
        <ul className=' py-2 px-1'>
        <li className='font-medium hover:opacity-75'><NavLink to='/'>Home</NavLink></li>
        <li className='font-medium hover:opacity-75'><NavLink to='/about'>About</NavLink></li>
        <li className='font-medium hover:opacity-75'><NavLink to='/contact'>Contact</NavLink></li>
        <li className='font-medium hover:opacity-75'><NavLink to='/cart'>Order</NavLink></li>
       </ul>
        </div>
    </div>
  )
}

export default Footer