import React, { useState } from 'react';
import image from '../../assets/images/pp.jpg';
import { IoMdMore } from "react-icons/io";

const ChatUser = ({ chatData }) => {
  const { id, name } = chatData; // Destructure the necessary properties from chatData

  return (
    <div className='flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700'>
      <div className='relative w-10 h-10'>
        {/* Placeholder for user profile picture */}
        <img
          src={`https://api.adorable.io/avatars/285/${id}.png`} // Replace with actual user image source
          alt={name}
          className='object-cover w-full h-full rounded-full'
        />
      </div>
      <div className='ml-3'>
        <h3 className='text-gray-800 dark:text-gray-300'>{name}</h3>
        {/* Optionally display additional info such as last message or timestamp */}
        {/* <p className='text-sm text-gray-600 dark:text-gray-400'>Last message preview...</p> */}
      </div>
    </div>
  );
};

export default ChatUser;
