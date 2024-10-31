import React from 'react';
import { FaGithub } from 'react-icons/fa';
import TechStack from './TechStack';

const MobileAppProject = ({ details, index }) => {
  return (
    <div className="w-full max-w-[780px] p-12 transition-transform duration-300 rounded-lg shadow-md dark:shadow-lg">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        <div className="relative flex justify-center md:order-1">
          <div className="relative w-[30%]">
            <img
              src={details.img}
              alt={details.title}
              className="w-full rounded-lg shadow-md"
            />
            <a
              href={details?.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-0 rounded-lg opacity-0 hover:bg-opacity-70 hover:opacity-100"
            >
              <div className="inline-flex items-center px-4 py-2 text-[10px] font-medium bg-neutral-800 rounded-xl">
                View Code
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center md:order-2">
          <div className="flex items-center justify-center gap-3 py-4 md:justify-start">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{details.title}</h2>
            <a href={details?.github_link}>
              <FaGithub className="text-[22px] text-black transition-transform duration-500 dark:text-white hover:scale-105" />
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {details?.description}
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2 py-1">
              {details.technology.map((tech, techIndex) => (
                <TechStack key={techIndex} technology={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppProject;
