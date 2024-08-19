import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { FaXmark, FaBars } from 'react-icons/fa6'

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // TOGGLE MENU

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
      const handleScroll = () => {
        if(window.scrolly > 100){
            setIsSticky(true)
        }
        else{
          setIsSticky(false)
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.addEventListener('scroll', handleScroll);
      }

  });

    // NAVIGATION DATA

    const navdata = [
      { link: 'Home', path:'home' },
      { link: 'Services', path:'services' },
      { link: 'About', path:'about' },
      { link: 'Courses', path:'courses' },
      { link: 'Team', path:'team' },
      { link: 'FAQ', path:'faq' },
    ]

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
          <div className='flex justify-between items-center text-base gap-8'>
            <a href="" className='text-[#263238] text-2xl font-semibold flex items-center space-x-3'>Sk Digi Tech</a>

                {/* NAV ITEMS */}

                <ul className='md:flex space-x-12 hidden'>

                        {
                          navdata.map(({ link, path }) => <Link key={path} spy={true} smooth={true} offset={-100} to={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium' >{link}</Link>)
                        }

                </ul>

                {/* NAVIGATION BUTTONS */}

                <div className="space-x-12 hidden lg:flex items-center">
                        <a href='/choose' className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                        <a href='/chooseasguest' className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray'>Login as Guest</a>
                </div>

                {/* NAVIGATION MENU BUTTON */}

                <div className='md:hidden'>

                        <button onClick={toggleMenu}  className='text-neutralDGray focus:outline-none focus:text-gray-500'>
                            {
                              isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>

                </div>

          </div>

            {/* NAVIGATION FOR MOBILE SCREEN */}

            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
                     {
                          navdata.map(({ link, path }) => <Link key={path} spy={true} smooth={true} offset={-100} to={path} className='block text-base text-white hover:text-brandPrimary first:font-medium' >{link}</Link>)
                      }

            </div>

      </nav>
    </header>
  )
}
