import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { FaThreads } from 'react-icons/fa6';

const socialLinks  = {
linkedin:'https://www.linkedin.com/in/roman-humagain/',
github:'https://github.com/romanhumagain',
instagram:'https://www.instagram.com/__roman_69/',
facebook:'https://www.facebook.com/roman.humagain/',
x:'https://x.com/i/flow/login?redirect_after_login=%2Froman_humagain',
thread:'https://www.threads.net/@__roman_69',
};

export const socialLinksDetails = [
  {
    name:'linkedin',
    link:'https://www.linkedin.com/in/roman-humagain/',
    icon:FaLinkedin,
    brand_color:'text-blue-600'
  },

  {
    name:'github',
    link:'https://github.com/romanhumagain',
    icon:FaGithub,
    brand_color:'text-gray-800 dark:text-gray-100'
  },

  {
    name:'instagram',
    link:'https://www.instagram.com/__roman_69/',
    icon:FaInstagram,
    brand_color:'text-pink-500'
  },

  {
    name:'facebook',
    link:'https://www.facebook.com/roman.humagain/',
    icon:FaFacebook,
    brand_color:'text-blue-700'
  },

  {
    name:'x',
    link:'https://x.com/roman_humagain',
    icon:BsTwitterX,
    brand_color:'text-black dark:text-gray-100 text-[19px]'
  },

  {
    name:'threads',
    link:'https://www.threads.net/@__roman_69',
    icon:FaThreads,
    brand_color:'text-neutral-900 dark:text-gray-100 hidden md:flex'
  },
]

export default socialLinks