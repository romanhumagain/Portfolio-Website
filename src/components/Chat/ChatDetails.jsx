import React from 'react'
import toast from 'react-hot-toast';
import { IoMdClose } from "react-icons/io";
import image from '../../assets/images/pp.jpg'
import { FaPaperPlane } from "react-icons/fa";

const ChatDetails = ({ closeModal }) => {
  return (
    <>
      <div className='flex items-center justify-between px-5 py-5 bg-slate-200 dark:bg-neutral-800 '>

        <div className='flex items-center gap-3'>
          <img src={image} className='object-cover w-[40px] h-[40px] rounded-full ' />

          <div className='flex-col gap-2'>
            <p className='text-sm text-gray-800 md:text-md lg:text-[15px] text-md dark:text-gray-300 '>Roman Humagain</p>
            <p className='text-[10px] md:text-[12px] text-neutral-500'>romanhumagain@gmail.com</p>
          </div>
        </div>

        <div className='flex justify-end'>
          <IoMdClose className='text-[26px] md:text-[30px] text-gray-800 cursor-pointer dark:text-gray-300' onClick={closeModal} />
        </div>
      </div>

      <div className='flex-1 px-5 py-3 overflow-y-auto h-[calc(100vh-140px)] modal-scrollbar'>
        <p className='text-[13px] text-neutral-500'>Your chats are secured with end-to-end encryption, allowing only you and the person you're messaging to read them.</p>



      </div>

      <div className='px-3 md:px-5'>
        <div className="flex items-center w-full p-1 px-2 bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <input
            type="text"
            className="w-full p-2 text-sm text-gray-800 bg-transparent outline-none dark:text-gray-200"
            placeholder="Type a message..."
          />
          <button
            className="p-2 ml-2 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 hover:bg-opacity-80"
          >
            <FaPaperPlane className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatDetails