import blogify_img from '../assets/images/portfolio/blogify.png';
import task_unity_img from '../assets/images/portfolio/task_unity.png';
import techx_img from '../assets/images/portfolio/techx.png';
import student_management_img from '../assets/images/portfolio/student_management.png';
import taxi_booking_png from '../assets/images/portfolio/taxi_booking.png';
import hotel_management_img from '../assets/images/portfolio/hotel_management.png';
import food_delivery_app_img from '../assets/images/portfolio/food_delivery_app.png';
import food_ordering_img from '../assets/images/portfolio/food_odering.png';
import chatbot_img from '../assets/images/portfolio/AI-ChatBot.png';
import news_web_img from '../assets/images/portfolio/news_app.png';
import weather_app from '../assets/images/portfolio/weather-app.png';
import news_app from '../assets/images/portfolio/flutter_news_app.jpg';

import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaGithub, FaFigma } from 'react-icons/fa';
import { SiCsharp, SiTypescript, SiDjango, SiExpress, SiFlutter, SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiOracle, SiDart, SiPostman, SiGit } from 'react-icons/si';

const projectsData = [
  {
    category: 'web',
    details: [
      {
        img: blogify_img,
        title: 'Blogify',
        alt: 'Blogify',
        description: 'A social blogging platform built with React and Django, allowing users to create and share posts, engage with the community, and manage profiles.',
        github_link: 'https://github.com/romanhumagain/Blogify', 
        technology: [
          { icon: SiDjango, name: 'Django', brand_color: '#0E4B3A' },
          { icon: FaReact, name: 'React', brand_color: '#61DAFB' },
          { icon: SiMysql, name: 'MySQL', brand_color: '#005D8A' },
          { icon: SiTailwindcss, name: 'Tailwind', brand_color: '#38B2AC' }

        ]
      },
      {
        img: task_unity_img,
        title: 'Task Unity',
        alt: 'Task Unity',
        description: 'A task management system using the MERN stack, designed for collaboration, task allocation, and tracking progress efficiently.',
        github_link: 'https://github.com/romanhumagain/TaskUnity', 
        technology: [
          { icon: FaReact, name: 'React', brand_color: '#61DAFB' },
          { icon: FaNodeJs, name: 'Node.js', brand_color: '#68A063' },
          { icon: SiExpress, name: 'Express.js', brand_color: '#000000' },
          { icon: SiMongodb, name: 'MongoDB', brand_color: '#47A248' },
          { icon: SiTailwindcss, name: 'Tailwind', brand_color: '#38B2AC' }

        ]
      },
      {
        img: student_management_img,
        title: 'Student Management System',
        alt: 'Student Management',
        description: 'A student management system built with Django, for handling student data, including enrollment and attendance.',
        github_link: 'https://github.com/romanhumagain/Django_Student-Management-System',
        technology: [
          { icon: SiTypescript, name: 'JavaScript', brand_color: '#F7DF1E' },
          { icon: SiDjango, name: 'Django', brand_color: '#0E4B3A' },
          { icon: FaHtml5, name: 'HTML5', brand_color: '#E34F26' },
          { icon: FaBootstrap, name: 'Bootstrap', brand_color: '#563D7C' },
          { icon: SiMysql, name: 'MySQL', brand_color: '#005D8A' }
        ]
      },
      {
        img: food_ordering_img,
        title: 'Food Ordering',
        alt: 'Food Ordering',
        description: 'A Django-based food ordering system with email verification for secure transactions and order management.',
        github_link: 'https://github.com/romanhumagain/django-food-ordering-system',
        technology: [
          { icon: SiTypescript, name: 'JavaScript', brand_color: '#F7DF1E' },
          { icon: SiDjango, name: 'Django', brand_color: '#0E4B3A' },
          { icon: FaHtml5, name: 'HTML5', brand_color: '#E34F26' },
          { icon: FaBootstrap, name: 'Bootstrap', brand_color: '#563D7C' },
          { icon: SiMysql, name: 'MySQL', brand_color: '#005D8A' }
        ]
      },
      {
        img: chatbot_img,
        title: 'AI ChatBot',
        alt: 'AI ChatBot',
        description: 'An interactive chatbot using OpenAI’s GPT, ready for answering queries and conversational integration.',
        github_link: 'https://github.com/romanhumagain/AI-Chat-Bot',
        technology: [
          { icon: SiTypescript, name: 'JavaScript', brand_color: '#F7DF1E' },
          { icon: SiDjango, name: 'Django', brand_color: '#0E4B3A' },
          { icon: FaHtml5, name: 'HTML5', brand_color: '#E34F26' },
          { icon: FaBootstrap, name: 'Bootstrap', brand_color: '#563D7C' },
          { icon: SiMysql, name: 'MySQL', brand_color: '#005D8A' }
        ]
      },
      {
        img: news_web_img,
        title: 'News Website',
        alt: 'News Website',
        description: 'A React app displaying news from NewsAPI, with options to browse by category and search topics.',
        github_link: 'https://github.com/romanhumagain/React-News-App',
        technology: [
          { icon: FaReact, name: 'React', brand_color: '#61DAFB' },
          { icon: SiTailwindcss, name: 'Tailwind', brand_color: '#38B2AC' }
        ]
      },
      {
        img: weather_app,
        title: 'Weather App',
        alt: 'Weather App',
        description: 'A weather app providing real-time city updates, displaying current temperature and conditions.',
        github_link: 'https://github.com/romanhumagain/Weather-Application',
        technology: [
          { icon: SiTypescript, name: 'JavaScript', brand_color: '#F7DF1E' },
          { icon: SiDjango, name: 'Django', brand_color: '#0E4B3A' },
          { icon: FaHtml5, name: 'HTML5', brand_color: '#E34F26' },
          { icon: FaBootstrap, name: 'Bootstrap', brand_color: '#563D7C' },
        ]
      },
      {
        img: techx_img,
        title: 'TechX',
        alt: 'TechX',
        description: 'TechX is a social media platform for sharing thoughts and expertise, featuring a seamless user interface.',
        github_link: 'https://github.com/romanhumagain/TechX-A_Social_Media_Platform',
        technology: [
          { icon: SiTypescript, name: 'JavaScript', brand_color: '#F7DF1E' },
          { icon: SiDjango, name: 'Django', brand_color: '#0E4B3A' },
          { icon: FaHtml5, name: 'HTML5', brand_color: '#E34F26' },
          { icon: FaBootstrap, name: 'Bootstrap', brand_color: '#563D7C' },
          { icon: SiMysql, name: 'MySQL', brand_color: '#005D8A' }
        ]
      }
    ]
  },
  {
    category: 'mobile',
    details: [
      {
        img: food_delivery_app_img,
        title: 'Food Delivery App',
        alt: 'Food Delivery App',
        description: 'A Flutter-based food delivery app with Firebase integration, offering a smooth ordering experience.',
        github_link: 'https://github.com/romanhumagain/Food-Delivery-App',
        technology: [
          { icon: SiDart, name: 'Dart', brand_color: '#00BFFF' },
          { icon: SiFlutter, name: 'Flutter', brand_color: '#02569B' },
          { icon: SiFirebase, name: 'Firebase', brand_color: '#FFCA28' }
        ]
      },
      {
        img: news_app,
        title: 'News App',
        alt: 'News App',
        description: 'A news app built with Flutter, providing the latest articles through NewsAPI.',
        github_link: 'https://github.com/romanhumagain/Flutter-News-App',
        technology: [
          { icon: SiDart, name: 'Dart', brand_color: '#00BFFF' },
          { icon: SiFlutter, name: 'Flutter', brand_color: '#02569B' }
        ]
      }
    ]
  },
  {
    category: 'desktop',
    details: [
      {
        img: taxi_booking_png,
        title: 'Taxi Booking App',
        alt: 'Taxi Booking',
        description: 'A desktop taxi booking application for reserving rides, managing bookings, and service administration.',
        github_link: 'https://github.com/romanhumagain/Taxi-Booking-Application',
        technology: [
          { icon: FaPython, name: 'Python', brand_color: '#3776AB' },
          { icon: SiMysql, name: 'MySQL', brand_color: '#005D8A' }
        ]
      },
      {
        img: hotel_management_img,
        title: 'Hotel Booking System',
        alt: 'Hotel Management',
        description: 'A hotel management system for handling reservations, guest check-ins, and staff operations.',
        github_link: 'https://github.com/romanhumagain/Hotel-Booking-Application',
        technology: [
          { icon: FaJava, name: 'Java', brand_color: '#3776AB' },
          { icon: SiMysql, name: 'MySQL', brand_color: '#005D8A' }
        ]
      }
    ]
  }
];

export default projectsData;
