import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FullStackProject from './FullStackProject';
import projectsData from '../data/projectDetails';
import VerticalLine from '../components/common/VerticalLine';
import ProjectNavbar from './ProjectNavbar';
import { FaGlobe, FaLaptopCode } from 'react-icons/fa';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import MobileAppProject from './MobileAppProject';
import loading_gif from '../assets/loading.gif';
import Footer from '../components/Footer/Footer'
import DesktopAppProject from './DesktopAppProject';
import ProjectHeading from './ProjectHeading';
import ContactModal from '../modal/ContactModal';

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const [fullStackProjectLists, setFullStackProjectLists] = useState([]);
  const [desktopAppProjectLists, setDesktopAppProjectLists] = useState([]);
  const [mobileAppProjectLists, setMobileAppProjectLists] = useState([]);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactOptionClicked, setContactOptionClicked] = useState(false);


  const [isLoading, setIsLoading] = useState(true);

  const fullStackRef = useRef(null);
  const desktopAppRef = useRef(null);
  const mobileAppRef = useRef(null);

  
  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  const fetchProjectLists = () => {
    const fullStackProjects = projectsData.filter((project) => project.category === 'web');
    const desktopAppProjects = projectsData.filter((project) => project.category === 'desktop');
    const mobileAppProjects = projectsData.filter((project) => project.category === 'mobile');

    setFullStackProjectLists(fullStackProjects);
    setDesktopAppProjectLists(desktopAppProjects);
    setMobileAppProjectLists(mobileAppProjects);
  };

  useEffect(() => {
    fetchProjectLists();

    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen md:p-5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 dark:from-neutral-900 dark:to-neutral-950" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <ProjectNavbar scrollToSection={scrollToSection} fullStackRef={fullStackRef} desktopAppRef={desktopAppRef} mobileAppRef={mobileAppRef} isContactModalOpen={isContactModalOpen} setIsContactModalOpen={setIsContactModalOpen} contactOptionClicked={contactOptionClicked} />
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <img src={loading_gif} alt="Loading..." className="w-20 h-20 md:w-32 md:h-32" />
        </div>
      ) : (
        <>
          <ProjectHeading/>

          <div className='flex flex-col justify-center' ref={fullStackRef} style={{ paddingTop: '88px' }}>
            <div className="flex items-center justify-center mb-4 space-x-3">
              <p className="text-2xl font-semibold text-transparent lg:text-3xl bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text">
                Full Stack Projects
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-10 p-5'>
              {fullStackProjectLists.length > 0 && fullStackProjectLists[0].details.map((details, index) => (
                <div key={index}>
                  <FullStackProject details={details} index={index} />
                  {index < fullStackProjectLists[0].details.length - 1 && (
                    <VerticalLine icon={FaGlobe} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="w-[65%] h-[2px] mx-auto my-8 border-0 rounded-full bg-gradient-to-r from-neutral-800 via-gray-500 to-gray-300" />



          <div className='flex flex-col justify-center mt-8' ref={mobileAppRef} style={{ paddingTop: '88px' }}>
            <div className="flex items-center justify-center mb-4 space-x-3">
              <p className="text-2xl font-semibold text-transparent lg:text-3xl bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text">
                Mobile Application Projects
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-10'>
              {mobileAppProjectLists.length > 0 && mobileAppProjectLists[0].details.map((details, index) => (
                <div key={index}>
                  <MobileAppProject details={details} index={index} />
                  {index < mobileAppProjectLists[0].details.length - 1 && (
                    <VerticalLine icon={MdOutlinePhoneAndroid} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <hr className="w-[65%] h-[2px] mx-auto my-8  border-0 rounded-full bg-gradient-to-r from-neutral-800 via-gray-500 to-gray-300" />




          <div className='flex flex-col justify-center mt-16 mb-10 md:mt-18 lg:mt-20' ref={desktopAppRef} style={{ paddingTop: '88px' }}>
            <div className="flex items-center justify-center mb-4 space-x-3">
              <p className="text-2xl font-semibold text-transparent lg:text-3xl bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text">
                Desktop Application Project
              </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-10'>
              {desktopAppProjectLists.length > 0 && desktopAppProjectLists[0].details.map((details, index) => (
                <div key={index}>
                  <DesktopAppProject details={details} index={index} />
                  {index < desktopAppProjectLists[0].details.length - 1 && (
                    <VerticalLine icon={FaLaptopCode} />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='mt-20'>
            <Footer />
          </div>

        </>
      )}

      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} setContactOptionClicked={setContactOptionClicked} />
      )}
    </div>
  );
};

export default ProjectDetailsPage;
