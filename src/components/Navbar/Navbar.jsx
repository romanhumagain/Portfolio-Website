import React, { useEffect, useState } from 'react';
import ContactModal from '../../modal/ContactModal';

const Navbar = ({ homeRef, aboutRef, skillsRef, expertiseRef, projectsRef, certificatesRef, scrollToSection }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const handleOpenModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, id: 'Home' },
        { ref: aboutRef, id: 'About' },
        { ref: skillsRef, id: 'Skills' },
        { ref: expertiseRef, id: 'Expertise' },
        { ref: projectsRef, id: 'Projects' },
        { ref: certificatesRef, id: 'Certificates' },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(({ ref, id }) => {
        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect();
          const sectionTop = top + window.scrollY;

          if (sectionTop <= scrollPosition && sectionTop + ref.current.clientHeight > scrollPosition) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [homeRef, aboutRef, skillsRef, expertiseRef, projectsRef, certificatesRef]);

  return (
    <>
      <div className='fixed z-50 flex justify-center w-full max-w-3xl px-3 py-3 my-5 rounded-full shadow-md bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-800'>
        <ul className='flex items-center gap-10 font-semibold text-[15px] text-slate-800 dark:text-neutral-300'>
          {['Home', 'About', 'Skills', 'Expertise', 'Projects', 'Certificates'].map((section, index) => {
            const sectionRefs = [homeRef, aboutRef, skillsRef, expertiseRef, projectsRef, certificatesRef];
            return (
              <li
                key={section}
                className={`relative cursor-pointer group ${activeSection === section ? 'text-slate-900 dark:text-neutral-100 scale-110' : ''} hover:scale-105 transition-transform duration-700`}
                onClick={() => {
                  setActiveSection(section);
                  scrollToSection(sectionRefs[index]);
                }}
              >
                {section}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-600 to-purple-700 transition-all duration-500 ${activeSection === section ? 'w-full' : 'w-0'}`}
                ></span>
              </li>
            );
          })}
          <li
            className='px-3 py-[3px] text-[15px] transition-transform duration-700 rounded-full shadow-sm cursor-pointer bg-gradient-to-r from-pink-600 to-purple-700 text-neutral-300 hover:scale-105'
            onClick={handleOpenModal}
          >
            Contact
          </li>
        </ul>
      </div>
      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Navbar;
