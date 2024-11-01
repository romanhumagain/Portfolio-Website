import { FaLaptopCode, FaMobileAlt, FaDesktop } from 'react-icons/fa';

const services = [
  {
    title: 'Full Stack Development',
    description: 'I build complete web applications that work well on both the front and back ends. This includes creating user-friendly designs, ensuring smooth server operations, and developing REST APIs for efficient data exchange.',
    technologies: "(React, Django, MySQL)",
    icon: FaLaptopCode
  },
  {
    title: "MERN Stack",
    description: "I create full-stack web apps using the MERN stack, ensuring a smooth connection between the front-end and back-end. I focus on responsive designs and effective data management.",
    technologies: "(React, Node.js, Express, MongoDB)",
    icon: FaLaptopCode
  },
  {
    title: 'Mobile Application',
    description: 'I design mobile apps for iOS and Android that are easy to use and visually appealing. I aim for good performance to provide a great user experience.',
    technologies: "(Flutter, Dart)",
    icon: FaMobileAlt 
  },
  {
    title: 'Desktop Application',
    description: 'I create desktop applications that work on various operating systems. These apps are user-friendly and efficient, helping users complete tasks easily.',
    technologies: "(Python, Java, C#)",
    icon: FaDesktop,
  }
];

export default services;
