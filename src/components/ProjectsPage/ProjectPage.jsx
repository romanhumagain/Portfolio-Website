import { LuCode2 } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import ProjectCard from "./ProjectCard";
import VerticalLine from "../common/VerticalLine";
import SectionHeading from "../common/SectionHeading";
import { useNavigate } from 'react-router-dom';

const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen' style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='w-full max-w-6xl px-5 mt-24 rounded-lg md:mt-10 sm:px-8'>
          <SectionHeading title={"Latest Projects"} />
          <div className="grid items-center grid-cols-1 gap-10 py-5 shadow-lg sm:grid-cols-12 md:gap-5 sm:px-12 lg:px-14 rounded-3xl bg-gradient-to-r dark:bg-gradient-to-r from-slate-200 md:from-slate-200 md:via-slate-300 to-slate-300 md:to-slate-400 dark:from-neutral-800 dark:to-neutral-900">
            <div className="flex flex-col items-center md:items-center sm:col-span-5 px-7">
              <div className="text-start md:text-start">
                <h2 className="mt-1 text-2xl font-semibold text-transparent sm:text-3xl bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text">
                  Portfolio
                </h2>
                <p className="mt-1 text-xl font-semibold text-gray-800 sm:text-2xl dark:text-gray-200">
                  My Project Listing
                </p>
                <p className="mt-4 text-sm text-gray-700 sm:text-base dark:text-gray-400">
                  I have developed many Full stack projects using <strong>React, Django, (MERN STACK)</strong>, and Mobile Apps using <strong>Flutter</strong>. Click below to view or download my projects.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <button className='flex items-center gap-2 px-4 py-[3px] font-semibold text-white transition-transform duration-700 rounded-lg shadow-md sm:py-1 text-md bg-gradient-to-r from-pink-600 to-purple-700 hover:shadow-lg hover:scale-105'
                  onClick={() => {
                    navigate('/project-details')
                  }}>
                  View All Projects <GoProjectSymlink />
                </button>
                <a href="https://github.com/romanhumagain?tab=repositories" target="_blank" className='flex items-center gap-2 px-3 py-[3px] font-semibold text-white transition-transform duration-700 rounded-lg shadow-md sm:py-1 text-md bg-gradient-to-r from-cyan-600 to-blue-700 hover:shadow-lg hover:scale-105'>
                  View Source Code <LuCode2 />
                </a>
              </div>
            </div>
            <div className="sm:col-span-7">
              <div className="px-0 sm:px-2">
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProjectPage;
