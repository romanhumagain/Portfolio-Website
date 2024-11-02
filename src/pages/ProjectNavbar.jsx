import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import {useContactModal} from '../context/ContactModalContext'
import { useChat } from '../context/ChatContext';


const ProjectNavbar = ({ scrollToSection, fullStackRef, desktopAppRef, mobileAppRef}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {isContactModalOpen, isChatModalOpen} = useContactModal();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileScroll = (ref) => {
    setIsMobileMenuOpen(false);
    scrollToSection(ref)
  }

  return (
    <nav className={`fixed top-0 left-0 z-40 w-full shadow-md bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 dark:from-neutral-900 dark:to-neutral-950`}>
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default ProjectNavbar;
