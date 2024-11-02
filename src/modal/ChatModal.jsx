import React, { useEffect, useState } from 'react';
import { useChat } from '../context/ChatContext';
import ChatDetails from '../components/Chat/ChatDetails';
import ChatList from '../components/Chat/ChatList';
import ChatLogin from '../components/Chat/ChatLogin';

const ChatModal = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { userRole, isAuthenticated } = useChat();

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
    setEmail('');
    setEmailError('');
    setFormMessage('');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-end w-full h-full bg-black bg-opacity-60 duration-300 ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={handleBackdropClick}
    >
      <div className={`modal-scrollbar md:top-0 md:right-0 bottom-0 min-h-screen overflow-y-auto w-full max-w-[340px] md:max-w-[380px] lg:max-w-[400px] bg-gradient-to-r from-slate-100 md:from-slate-200 md:via-slate-300 to-slate-300 md:to-slate-400 dark:from-neutral-900  dark:to-neutral-950  rounded-tl-2xl rounded-bl-2xl rounded-br-none rounded-tr-none shadow-lg transform transition-transform duration-300 ${isModalOpen ? "translate-y-0" : "-translate-y-20"}`}>

        {isAuthenticated ?
          <div>
            {userRole === "admin" ? <ChatList closeModal={closeModal} /> : <ChatDetails closeModal={closeModal} />}
          </div> :
          <div className='h-screen'>
            <ChatLogin closeModal={closeModal} />
          </div>
        }
      </div>
    </div>
  );
}

export default ChatModal;
