import React from 'react';
import SocialLinks from './SocialLinks';
import main_img from '../assets/images/main_image.jpg';
import resume from '../assets/Roman-Humagain-cv.pdf';
import { FaDownload } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import CoolMode from './ui/CoolMode';

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen p-8 mb-10 lg:p-0 md:mb-8 lg:mb-0 ' style={{ fontFamily: "Montserrat, sans-serif" }}>
          <motion.div
            className='w-full max-w-xl p-5 py-9 mt-12 shadow-xl dark:shadow-lg lg:max-w-[640px] lg:p-10 lg:pb-8 lg:pt-12 bg-gradient-to-l from-slate-100 to-slate-300 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl'
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              duration: 0.48,
              ease: 'easeOut',
            }}
          >
            <div className='flex flex-col-reverse gap-5 lg:grid lg:items-center lg:grid-cols-12 lg:gap-0'>
              <div className='flex flex-col items-center justify-center col-span-12 lg:items-start lg:col-span-8'>
                <p className='mb-[2px] md:mb-[5px] text-xs font-medium sm:text-sm: lg:text-md text-slate-500 dark:text-gray-400'>Hey <span className="wave-emoji">✋</span>, I'm</p>
                <p className='mt-1 text-[20px] font-semibold sm:text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-gray-100'>Roman Humagain</p>

                <div className='mt-1'>
                  <p className='text-sm font-semibold sm:text-lg lg:text-lg text-slate-700 dark:text-gray-300'>
                    a{' '}
                    <span className="text-cyan-500 dark:text-cyan-500">
                      <Typewriter
                        words={['Software Developer', 'Full Stack Developer', 'Mobile App Developer']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                      />
                    </span>
                  </p>
                </div>

                <div className='flex flex-wrap items-center justify-center gap-3 mt-6 md:gap-4'>
                  <a
                    href={resume}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-1 py-1 text-sm font-semibold text-white transition-all duration-700 rounded-lg shadow-lg lg:py-2 lg:px-3 lg:text-md bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 hover:shadow-lg'
                  >
                    Download Resume <FaDownload />
                  </a>

                  <a
                    href="mailto:romanhumagain@gmail.com"
                    className="p-[5px] text-white transition-all duration-500 rounded-full shadow-md bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-500 hover:to-purple-600 hover:scale-105 hover:shadow-md active:scale-95"
                    title="Send an Email"
                  >
                    <MdOutlineMailOutline className='text-lg lg:text-2xl' />
                  </a>
                </div>

                <div className='mt-5'>
                  <div className='flex gap-5'>
                    <SocialLinks />
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-center col-span-12 lg:col-span-4'>
                <div className='w-[129px] h-[129px]  overflow-hidden transition-transform duration-700 rounded-full sm:w-[191px] sm:h-[191px] lg:w-52 lg:h-52 hover:scale-105 hover:shadow-lg'>
                  <img
                    src={main_img}
                    alt="Profile"
                    className='object-cover w-full h-full transition duration-500 ease-in-out'
                  />
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <p className="text-[13px] text-center text-gray-800 md:text-[15px] lg:text-[17px] font-extralight dark:text-gray-400">
                &lt;Passion in Every Line of Code/&gt;
              </p>
            </div>
          </motion.div>
      </div>
    </>
  );
};

export default HomePage;
