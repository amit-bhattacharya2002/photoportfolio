import React from 'react';

import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'

import {Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className=' fixed w-full px-[30px] lg:px-[100px] bg-white z-30 h-[100px] lg:h-[140px] flex items-center'> 
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>

        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='Logo'/></Link>

        <nav className=' hidden lg:flex gap-x-12 font-semibold'>
          <Link className='text-[#696c6d] hover:text-primary transition' to={'/'}>Home</Link>  
          <Link className='text-[#696c6d] hover:text-primary transition' to={'/about'}>About</Link>  
          <Link className='text-[#696c6d] hover:text-primary transition' to={'/portfolio'}>Portfolio</Link>  
          <Link className='text-[#696c6d] hover:text-primary transition' to={'/contact'}>Contact</Link>  

        </nav>
      </div>

        <Socials/>

        <MobileNav/>
    </header>
);
};

export default Header;
