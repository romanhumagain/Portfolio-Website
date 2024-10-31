import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectNavbar = ({ scrollToSection, fullStackRef, desktopAppRef, mobileAppRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileScroll = (ref)=>{
    setIsMobileMenuOpen(false);
    scrollToSection(ref)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-slate-400 dark:bg-neutral-800">
      <div className="max-w-6xl px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to={'/'}>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">Portfolio</h1></Link>
          <div className="hidden space-x-6 md:flex">
            <Link
              onClick={() => scrollToSection(fullStackRef)}
              className="text-gray-800 cursor-pointer dark:text-gray-400 hover:text-white"
            >
              Full Stack Application
            </Link>
            <Link
              onClick={()=>scrollToSection(mobileAppRef)}
              className="text-gray-800 cursor-pointer dark:text-gray-400 hover:text-white"
            >
              Mobile Application
            </Link>

            <Link
              onClick={() => scrollToSection(desktopAppRef)}
              className="text-gray-800 cursor-pointer dark:text-gray-400 hover:text-white"
            >
              Desktop Application
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-gray-300 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="flex flex-col mt-4 md:hidden">
            <Link
              onClick={() => handleMobileScroll(fullStackRef)}
              className="py-3 text-gray-800 dark:text-gray-400 hover:text-white"
            >
              Full Stack Application
            </Link>

            <Link
              onClick={() => handleMobileScroll(mobileAppRef)}
              className="py-3 text-gray-800 dark:text-gray-400 hover:text-white"
            >
              Mobile Application
            </Link>

            <Link
              onClick={() => handleMobileScroll(desktopAppRef)}
              className="py-3 text-gray-800 dark:text-gray-400 hover:text-white"
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
