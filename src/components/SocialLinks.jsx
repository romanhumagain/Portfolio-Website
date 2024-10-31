import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import icons
import socialLinks from '../data/socialLinks'
import { BsTwitterX } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className='mt-3'>
      <p className='font-medium text-md md:text-lg text-slate-600 dark:text-neutral-400'>Find me on</p>
      <div className='flex items-center gap-5 mt-5'>
        
        <a
          href={socialLinks?.linkedin}
          className='text-[23px] md:text-[28px] text-blue-600 transition-transform duration-700 transform hover:text-blue-800 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>

        <a
          href={socialLinks?.github}
          className='text-[23px] md:text-[28px] text-gray-800 transition-transform duration-700 transform dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-200 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>

        <a
          href={socialLinks?.instagram}
          className='text-[23px] md:text-[28px] text-pink-500 transition-transform duration-700 transform dark:text-pink-700 hover:text-pink-700 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram />
        </a>

        <a
          href={socialLinks?.facebook}
          className='text-[23px] md:text-[28px] text-blue-700 transition-transform duration-700 transform hover:text-blue-900 hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook />
        </a>

        <a
          href={socialLinks?.x}
          className='text-[23px] md:text-[28px] text-black transition-transform duration-700 transform dark:text-white hover:scale-110'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsTwitterX />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
