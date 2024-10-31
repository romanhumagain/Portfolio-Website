import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import socialLinks from '../../data/socialLinks'

const Footer = () => {
  return (
    <footer className="py-6 text-gray-800 dark:text-gray-400">
      <div className="container flex flex-col items-center px-4 mx-auto mb-3 space-y-2">
        
        <div className="flex mb-2 space-x-6">
          <a href={socialLinks.github} className="text-[25px] md:text-3xl text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-transform duration-700">
            <FaGithub />
          </a>
          <a href={socialLinks.linkedin} className="text-[25px] md:text-3xl text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-transform duration-700">
            <FaLinkedin />
          </a>
        </div>
        <div className="text-sm font-medium text-center text-gray-700 md:text-[17px] dark:text-gray-300">
          Your vision, my expertise. Let's collaborate!
        </div>

        <div className="text-sm text-center text-gray-500 md:text-md dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Roman Humagain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
