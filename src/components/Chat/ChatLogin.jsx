import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useChat } from '../../context/ChatContext';
import { auth, db } from '../../firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from 'react-hot-toast';

const ADMIN_EMAIL = "romanhumagain@gmail.com"; // Secure if possible

const ChatLogin = ({ closeModal }) => {
  const { setIsAuthenticated, setUserRole, setUser, createChatRoom  } = useChat();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Reference Firestore user document
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      let role;
      let userData;

      if (userSnap.exists()) {
        userData = userSnap.data();
        role = userData.role;
        
      } else {
        role = user.email === ADMIN_EMAIL ? "admin" : "member";

        userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role,
        };

        await setDoc(userRef, userData);
      }

      setUserRole(role);
      setIsAuthenticated(true);
      setUser(userData);
      toast.success("Successfully signed in!");

      createChatRoom();

    } catch (error) {
      console.error("Error during sign in:", error);
      toast.error("Failed to sign in. Please try again.");
    }
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
        <div className='p-5'>
          <div className='flex flex-col items-center flex-grow p-8 py-20 bg-white shadow-md rounded-xl md:py-16 dark:bg-neutral-800'>
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
        
      </div>
      
      <div className="mt-auto text-xs text-center text-gray-500 md:text-md dark:text-gray-500">
        <p>&copy; {new Date().getFullYear()} Roman Humagain. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ChatLogin;
