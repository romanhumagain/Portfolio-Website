import { FaLaptopCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';

const services = [
  {
    title: 'Full Stack Development',
    description: 'I create complete web applications that work well on both the front end and back end. This includes building user-friendly interfaces and ensuring everything runs smoothly on the server side.',
    technologies: "(React, Django, MySQL)",
    icon: FaLaptopCode
  },
  {
    "title": "MERN Stack",
    "description": "I develop full-stack web applications using the MERN stack, ensuring seamless interaction between front-end and back-end. This involves creating responsive user interfaces and handling efficient data management on the server side.",
    "technologies": "(React, Node.js, Express, MongoDB)",
    "icon": FaLaptopCode
  },
  
  {
    title: 'Mobile Application',
    description: 'I develop mobile apps for iOS and Android devices that are easy to use and visually appealing. My focus is on making sure the apps perform well and provide a great experience for users.',
    technologies: "(Flutter, Dart)",
    icon: FaMobileAlt 
  },
  {
    title: 'Desktop Application',
    description: 'I build desktop applications that work on different operating systems. These applications are designed to be user-friendly and efficient, helping users get their tasks done easily.',
    technologies: "(Python, Java, C#)",
    icon: FaDesktop,
  }
];

export default services;
