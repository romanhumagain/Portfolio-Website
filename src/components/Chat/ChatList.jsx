import React from 'react'
import ChatUser from './ChatUser'
import { IoMdClose } from "react-icons/io";


const ChatList = ({ closeModal }) => {
  return (
    <>
      <div className='flex items-center justify-between px-5 py-5 bg-slate-200 dark:bg-neutral-800'>
        <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-300'>Messages for You</h2>
        <IoMdClose className='text-[26px] md:text-[30px] text-gray-800 cursor-pointer dark:text-gray-300' onClick={closeModal} />
      </div>

      <div className='flex-1  overflow-y-auto h-[calc(100vh-70px)] modal-scrollbar'>
        <div className='flex flex-col gap-4 p-5 pt-8'>
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          
        </div>
      </div>

    </>
  )
}

export default ChatList