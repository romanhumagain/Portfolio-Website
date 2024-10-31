import React, { useRef, useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import HomePage from "./components/HomePage";
import About from "./components/AboutPage/About";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ServicePage from "./components/ServicePage/ServicePage";
import ProjectPage from "./components/ProjectsPage/ProjectPage";
import CertificatesPage from "./components/CertificatesPage/CertificatesPage";
import Footer from "./components/Footer/Footer";
import Mode from "./components/Mode/Mode";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SourceCodeDetailsPage from './pages/SourseCodeDetailsPage';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const expertiseRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const scrollToSection = (ref) => {
    if (ref.current) {
      const navbarHeight = 60;
      const top = ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-r from-slate-100 md:from-slate-200 md:via-slate-300 to-slate-300 md:to-slate-400 dark:from-neutral-900 dark:to-neutral-950" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='absolute z-50'>
          <Mode />
        </div>

        <Routes>
          <Route path='/' element={
            <>
              <div className='flex justify-center'>
                {isMobile ? (
                  <MobileNavbar
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    expertiseRef={expertiseRef}
                    projectsRef={projectsRef}
                    certificatesRef={certificatesRef}
                    scrollToSection={scrollToSection} 
                  />
                ) : (
                  <Navbar
                    homeRef={homeRef}
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    expertiseRef={expertiseRef}
                    projectsRef={projectsRef}
                    certificatesRef={certificatesRef}
                    scrollToSection={scrollToSection} 
                  />
                )}
              </div>
              <div ref={homeRef}><HomePage /></div>
              <div ref={aboutRef}><About /></div>
              <div ref={skillsRef}><SkillsPage /></div>
              <div ref={expertiseRef}><ServicePage /></div>
              <div ref={projectsRef}><ProjectPage /></div>
              <div ref={certificatesRef}><CertificatesPage /></div>
              <Footer />
            </>
          } />
          <Route path='/projects' element={<ProjectDetailsPage />} />
          <Route path='/project-source-code' element={<SourceCodeDetailsPage />} />
        </Routes>

        <Toaster />
      </div>
    </Router>
  );
}

export default App;
