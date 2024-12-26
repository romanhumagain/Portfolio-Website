import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import socialLinks, {socialLinksDetails} from '../data/socialLinks'
import { BsTwitterX } from "react-icons/bs";
import { FaThreads } from 'react-icons/fa6';

const SocialLinks = () => {
  return (
    <div className='mt-3'>
      <p className='font-medium text-md md:text-lg text-slate-600 dark:text-neutral-400'>Find me on</p>
      <div className='flex items-center gap-[18px] md:gap-5 mt-5'>

        {socialLinksDetails.length > 0 && socialLinksDetails.map((socialLink, index) => (
          
            <a
            key={index}
              href={socialLink.link}
              className={`text-[21px] md:text-[26px] ${socialLink.brand_color} transition-transform duration-700 transform hover:scale-125 cursor-pointer `}
              target='_blank'
              rel='noopener noreferrer'
            >
              <socialLink.icon />
            </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
