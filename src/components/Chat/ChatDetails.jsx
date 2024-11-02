import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import image from '../../assets/images/pp.jpg';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { IoMdMore } from "react-icons/io";
import { useChat } from '../../context/ChatContext';
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import toast from 'react-hot-toast';

const ChatDetails = ({ closeModal }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { adminId, currentUserId, roomId, sendMessage, logoutUser, isAuthenticated } = useChat();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated && roomId) {
      const fetchMessages = () => {
        const q = query(
          collection(db, "messages"),
          where("roomId", "==", roomId),
          orderBy("timestamp", "asc")
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const msgs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMessages(msgs);
        });

        return unsubscribe;
      };

      const unsubscribe = fetchMessages();
      return () => unsubscribe();
    }
  }, [roomId, isAuthenticated]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowOptions(false);
      logoutUser();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      try {
        await sendMessage(message);
        setMessage(''); // Clear input after sending
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    } else {
      console.error("Message cannot be empty!");
    }
  };

  return (
    <>
      <div className='flex items-center justify-between px-5 py-5 overflow-hidden bg-slate-200 dark:bg-neutral-800'>
        {/* Header Content */}
        <div className='flex items-center gap-3'>
          <img src={image} className='object-cover w-[40px] h-[40px] rounded-full' alt="User" />
          <div className='flex-col gap-2'>
            <p className='text-sm text-gray-800 md:text-md lg:text-[15px] dark:text-gray-300'>Roman Humagain</p>
            <p className='text-[10px] md:text-[12px] text-neutral-500'>romanhumagain@gmail.com</p>
          </div>
        </div>
        <div className='flex justify-end gap-4'>
          <div className='relative flex items-center gap-6'>
            <IoMdMore className='text-[26px] md:text-[30px] text-gray-800 cursor-pointer dark:text-gray-300' onClick={toggleOptions} />
            {showOptions && (
              <div className='absolute -right-4 top-5 z-10 w-[90px] mt-2 rounded-md shadow-lg bg-slate-200 dark:bg-neutral-800'>
                <div className='py-[5px]'>
                  <button onClick={handleLogout} className='block w-full px-4 py-2 text-sm text-left text-gray-800 hover:bg-slate-100 dark:hover:bg-neutral-700 dark:text-gray-200'>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
          <IoMdClose className='text-[26px] md:text-[30px] text-gray-800 cursor-pointer dark:text-gray-300' onClick={closeModal} />
        </div>
      </div>

      <div className='flex-1 px-5 py-3 overflow-y-auto h-[calc(100vh-150px)] modal-scrollbar'>
        <p className='text-[13px] text-neutral-500'>Your chats are secured with end-to-end encryption.</p>
        <div className='mt-3'>
          {messages && messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.senderId === currentUserId ? 'justify-end' : 'justify-start'} mb-2`}>
              <div className={`p-2 rounded-lg max-w-[70%] ${msg.senderId === currentUserId ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
                <p className='text-sm'>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='px-3 md:px-5'>
        <div className="flex items-center w-full p-1 px-2 bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <input
            type="text"
            className="w-full p-2 text-sm text-gray-800 bg-transparent outline-none dark:text-gray-200"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="p-2 ml-2 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 hover:bg-opacity-80"
            onClick={handleSendMessage}
          >
            <FaPaperPlane className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatDetails;
