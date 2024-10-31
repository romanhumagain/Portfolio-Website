import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState, useEffect } from "react";
import './Mode.css'; 

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
    <div 
      className={`fixed p-2 transition-transform duration-500 rounded-full shadow-xl cursor-pointer md:p-3 right-5 bottom-7 md:right-10 md:bottom-12 
                  ${mode === 'dark' ? 'bg-gradient-to-r from-gray-700 to-gray-300 text-white animate-toggle' : 'bg-gradient-to-r from-slate-200 to-slate-500 md:to-slate-600 text-black animate-toggle'} 
                  hover:scale-110 hover:shadow-xl`} 
      onClick={toggleMode}
    >
      {mode === "dark" ? (
        <CiLight className="text-2xl" />
      ) : (
        <MdDarkMode className="text-2xl" />
      )}
    </div>
  );
};

export default Mode;
