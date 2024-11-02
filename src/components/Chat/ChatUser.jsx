import React, { useState } from 'react';
import image from '../../assets/images/pp.jpg';
import { IoMdMore } from "react-icons/io";

const ChatUser = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleDelete = () => {
    // Add your delete functionality here
    console.log('Delete clicked');
  };

  const handleArchive = () => {
    // Add your archive functionality here
    console.log('Archive clicked');
  };

  return (
    <>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3 cursor-pointer'>
          <div className='p-1'>
            <img src={image} className='object-cover w-[38px] h-[38px] rounded-full' alt="Profile" />
          </div>
          <div className='flex flex-col pr-4 md:pr-10'>
            <p className='text-sm text-gray-800 md:text-md lg:text-[15px] dark:text-gray-300'>Roman Humagain</p>
            <p className='text-[10px] md:text-[12px] text-neutral-500'>4+ new conversations</p>
          </div>
        </div>

        <div className='relative text-gray-800 dark:text-gray-200 text-end'>
          <IoMdMore className='text-xl cursor-pointer md:text-2xl' onClick={handleToggleOptions} />
          {showOptions && (
            <div className='absolute right-0 z-10 w-[140px] mt-2 rounded-md shadow-lg bg-slate-200 dark:bg-neutral-800 '>
              <div className='py-[5px]'>
                <button
                  onClick={handleDelete}
                  className='block w-full px-4 py-2 text-sm text-left text-gray-800 hover:bg-slate-100 dark:hover:bg-neutral-700 dark:text-gray-200'
                >
                  Delete
                </button>
                <button
                  onClick={handleArchive}
                  className='block w-full px-4 py-2 text-sm text-left text-gray-800 hover:bg-slate-100 dark:hover:bg-neutral-700 dark:text-gray-200'
                >
                  Archive
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatUser;
