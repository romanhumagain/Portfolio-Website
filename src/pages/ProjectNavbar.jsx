import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const ProjectNavbar = ({ scrollToSection, fullStackRef, desktopAppRef, mobileAppRef , setIsContactModalOpen, contactOptionClicked}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileScroll = (ref) => {
    setIsMobileMenuOpen(false);
    scrollToSection(ref)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-400 dark:bg-neutral-800">
      <div className="max-w-6xl py-4 mx-auto px-7">
        <div className="flex items-center justify-between">
          <Link to={'/'}>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Portfolio</h1></Link>
          <div className="hidden space-x-6 md:flex md:items-center md:justify-center">
            <Link
              onClick={() => scrollToSection(fullStackRef)}
              className="text-gray-800 cursor-pointer dark:text-gray-300 hover:text-white"
            >
              Full Stack Application
            </Link>
            <Link
              onClick={() => scrollToSection(mobileAppRef)}
              className="text-gray-800 cursor-pointer dark:text-gray-300 hover:text-white"
            >
              Mobile Application
            </Link>

            <Link
              onClick={() => scrollToSection(desktopAppRef)}
              className="text-gray-800 cursor-pointer dark:text-gray-300 hover:text-white"
            >
              Desktop Application
            </Link>

            <Link
            className={`${!contactOptionClicked && 'animate-popup'} animate-fadeIn px-3 py-[3px] text-[15px] transition-transform duration-700 rounded-full shadow-sm cursor-pointer bg-gradient-to-r from-pink-600 to-purple-700 text-neutral-300 hover:scale-105`}
            onClick={()=>{setIsContactModalOpen(true)}}
          >
            Contact
          </Link>
          
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-gray-300 focus:outline-none">
              {isMobileMenuOpen ?
                <RxCross2 className='text-3xl' />
                :
                <RiMenu3Fill className='text-3xl' />
              }
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="flex flex-col mt-4 md:hidden">
            <Link
              onClick={() => handleMobileScroll(fullStackRef)}
              className="py-3 font-semibold text-gray-700 dark:text-gray-400 hover:text-white"
            >
              Full Stack Application
            </Link>

            <Link
              onClick={() => handleMobileScroll(mobileAppRef)}
              className="py-3 font-semibold text-gray-700 dark:text-gray-400 hover:text-white"
            >
              Mobile Application
            </Link>

            <Link
              onClick={() => handleMobileScroll(desktopAppRef)}
              className="py-3 font-semibold text-gray-700 dark:text-gray-400 hover:text-white"
            >
              Desktop Application
            </Link>

            <p
            className='px-3 mt-3 mb-5 py-[3px] text-[15px] w-[30%] flex justify-center font-semibold transition-transform duration-700 rounded-full shadow-sm cursor-pointer bg-gradient-to-r from-pink-600 to-purple-700 text-neutral-300 hover:scale-105'
            onClick={()=>{setIsContactModalOpen(true)}}
          >
            Contact
          </p>

          </div>
        )}
      </div>
    </nav>
  );
};

export default ProjectNavbar;
