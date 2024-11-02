import React, { useEffect, useState } from 'react';
import ChatUser from './ChatUser';
import { IoMdClose, IoMdMore } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { collection, query, onSnapshot, where } from "firebase/firestore"; 
import { db } from '../../firebase/firebase'; 
import { useChat } from '../../context/ChatContext';

const ChatList = ({ closeModal }) => { 
  const [showOptions, setShowOptions] = useState(false);
  const [users, setUsers] = useState([]); 
  const { currentUserId, logoutUser } = useChat();

  const toggleOptions = () => {
    setShowOptions(prev => !prev);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowOptions(false);
      logoutUser();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      where("receiverId", "==", currentUserId),
      where("senderId", "!=", currentUserId)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const userIds = new Set();

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        userIds.add(data.senderId);
      });

      const userIdArray = Array.from(userIds);
      fetchUserDetails(userIdArray);
    });

    return () => unsubscribe();
  }, [currentUserId]);

  // Function to fetch user details based on userIds
  const fetchUserDetails = async (userIds) => {
    // Implement logic to fetch user details from your users collection
    // For demonstration purposes, we will set the users state directly
    const userData = userIds.map(userId => ({
      id: userId,
      name: `User ${userId}`, // Replace this with actual user data retrieval
      // Add other user data as needed (e.g., profile picture)
    }));

    setUsers(userData);
  };

  return (
    <>
      <div className='flex items-center justify-between px-5 py-5 bg-slate-200 dark:bg-neutral-800'>
        <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-300'>Messages for You</h2>

        <div className='relative flex items-center gap-6'>
          <IoMdMore 
            className='text-[26px] md:text-[30px] text-gray-800 cursor-pointer dark:text-gray-300' 
            onClick={toggleOptions} 
          />
          
          <IoMdClose 
            className='text-[26px] md:text-[30px] text-gray-800 cursor-pointer dark:text-gray-300' 
            onClick={closeModal} 
          />

          {showOptions && (
            <div className='absolute right-5 top-5 z-10 w-[90px] mt-2 rounded-md shadow-lg bg-slate-200 dark:bg-neutral-800'>
              <div className='py-[5px]'>
                <button
                  onClick={handleLogout}
                  className='block w-full px-4 py-2 text-sm text-left text-gray-800 hover:bg-slate-100 dark:hover:bg-neutral-700 dark:text-gray-200'
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='flex-1 overflow-y-auto h-[calc(100vh-70px)] modal-scrollbar'>
        <div className='flex flex-col gap-4 p-5 pt-8'>
          {users.map(user => (
            <ChatUser key={user.id} chatData={user} /> // Pass user data to ChatUser
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatList;
