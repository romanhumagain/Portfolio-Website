import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import './Mode.css'; 
import {motion} from 'framer-motion'

const Mode = () => {
  const initialMode = localStorage.getItem('portfolio-mode') || 'light';
  const [mode, setMode] = useState(initialMode);

  const element = document.documentElement;

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (mode === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('portfolio-mode', "dark");
    } else {
      element.classList.remove('dark');
      localStorage.setItem('portfolio-mode', "light");
    }
  }, [mode]);

  return (
    <motion.div 
      className={`fixed p-[9px] transition-transform duration-500 rounded-full shadow-xl cursor-pointer md:p-[12px] right-6 bottom-[32px] md:right-10 md:bottom-12 
                  ${mode === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-300 text-white animate-popup' : 'bg-gradient-to-r from-slate-200 to-slate-500 md:to-slate-600 text-black animate-popup'} 
                  hover:scale-110 hover:shadow-xl`} 
      onClick={toggleMode}

      initial={{ scale: 0.9, opacity: 0, x: 25 }} 
          animate={{ scale: 1, opacity: 1, x: 0 }} 
          transition={{
            duration: 0.5,
            ease: 'easeOut', 
          }}
    >
      {mode === "dark" ? (
        <IoSunnyOutline className=" text-[22px]" />
      ) : (
        <MdDarkMode className="text-[22px]" />
      )}
    </motion.div>
  );
};

export default Mode;
