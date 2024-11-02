import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useChat } from '../../context/ChatContext';

const ChatLogin = ({ closeModal }) => {

  const {setIsAuthenticated, setUserRole} = useChat();

  const handleGoogleLogin = () => {
    
    setIsAuthenticated(true);
    setUserRole("member");
  };

  return (
    <div className='flex flex-col h-full pb-10'>
      <div>
        <div className='flex items-center justify-between px-5 py-5 rounded-t-lg shadow-lg bg-slate-200 dark:bg-neutral-700'>
          <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-300'>Chat Login</h2>
          <IoMdClose
            className='text-[28px] md:text-[30px] text-gray-800 cursor-pointer dark:text-gray-300'
            onClick={closeModal}
          />
        </div>
        <div className='flex flex-col items-center flex-grow p-8 py-20 bg-white rounded-b-lg shadow-md md:py-16 dark:bg-neutral-800'>
          <p className='mb-5 text-xl font-semibold text-gray-700 dark:text-gray-300'>Chat with Roman</p>
          <p className='mb-4 text-sm text-center text-gray-600 dark:text-gray-400'>
            Your messages are encrypted for your privacy and security.
          </p>
          <p
            onClick={handleGoogleLogin}
            className='flex items-center justify-center w-full gap-2 py-[10px] px-2 mb-4 font-semibold text-gray-800 transition-colors duration-500 shadow-xl cursor-pointer rounded-xl dark:text-gray-200 bg-slate-200 dark:bg-neutral-900 hover:bg-slate-300 dark:hover:bg-neutral-700'
          >
            <FcGoogle className='text-[22px]' /> Continue with Google
          </p>
          <p className='mt-3 text-xs text-gray-500 dark:text-gray-400'>
            By continuing, you agree to our <span className='text-blue-500 cursor-pointer'>Privacy Policy</span> and <span className='text-blue-500 cursor-pointer'>Terms of Service</span>.
          </p>
        </div>
      </div>
      
      <div className="mt-auto text-xs text-center text-gray-500 md:text-md dark:text-gray-500">
        <p>&copy; {new Date().getFullYear()} Roman Humagain. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ChatLogin;
