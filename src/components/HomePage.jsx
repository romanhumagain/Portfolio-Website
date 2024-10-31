import React from 'react';
import SocialLinks from './SocialLinks';
import main_img from '../assets/images/main_image.jpg';
import resume from '../assets/Roman_Humagain_Resume.pdf';

import { FaDownload } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import VerticalLine from './common/VerticalLine';

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen p-10 lg:p-1 ' style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='w-full max-w-xl p-8 mt-10 shadow-xl dark:shadow-lg lg:max-w-2xl lg:p-10 lg:pt-16 bg-gradient-to-l from-slate-100 to-slate-300 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl '>
          <div className='flex flex-col-reverse gap-5 lg:grid lg:items-center lg:grid-cols-12 lg:gap-0'>
            <div className='flex flex-col items-center col-span-12 lg:items-start lg:col-span-8'>
              <p className='text-xs font-medium sm:text-sm: lg:text-md text-slate-500 dark:text-gray-400 animate-fadeIn'>Hey✋, I'm</p>
              <p className='mt-1 text-xl font-semibold sm:text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-gray-100 animate-slideIn'>Roman Humagain</p>

              <div className='mt-1'>
                {/* Add Typewriter Effect here */}
                <p className='text-sm font-semibold sm:text-lg lg:text-lg text-slate-700 dark:text-gray-300 animate-fadeIn'>
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

              <div className='flex items-center gap-5 mt-6'>
                <a
                  href={resume}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-2 py-1 text-sm font-semibold text-white transition-all duration-700 rounded-lg shadow-lg lg:py-2 lg:px-5 lg:text-md bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 hover:shadow-lg'
                >
                  Download Resume <FaDownload />
                </a>
              </div>

              <div className='mt-4'>
                <div className='flex gap-5'>
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center col-span-12 lg:col-span-4'>
              <div className='w-32 h-32 overflow-hidden transition-transform duration-700 rounded-full shadow-lg sm:w-[191px] sm:h-[191px] lg:w-52 lg:h-52 hover:scale-105 hover:shadow-xl'>
                <img
                  src={main_img}
                  alt="Profile"
                  className='object-cover w-full h-full'
                />
              </div>
            </div>


          </div>

          <div className='mt-10'>
            <p className="text-sm text-center text-gray-800 transition-transform duration-700 sm:text-lg lg:text-lg font-extralight dark:text-gray-400 hover:scale-105">
              &lt;Passion in Every Line of Code/&gt;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
