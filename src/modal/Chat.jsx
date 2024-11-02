import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from 'react-icons/fi';
import ContactModal from "./ContactModal";
import { useState } from "react";
import { useContactModal } from "../context/ContactModalContext";
import { BsChatDotsFill } from "react-icons/bs";
import ChatModal from "./ChatModal";

const Chat = () => {
  const navigate = useNavigate();

  const {handleOpenChatModal, isChatModalOpen, setIsChatModalOpen, handleCloseChatModal} = useContactModal();

  const openContactPage = () => {
    handleOpenChatModal();
  };

  return (
    <>


      <div
        className="animate-popup fixed p-[8px] text-white transition-transform duration-500 rounded-full shadow-xl cursor-pointer md:p-[10px] right-6 bottom-[153px] md:right-10 md:bottom-[170px] bg-gradient-to-r from-pink-600 to-purple-700 hover:scale-110 hover:shadow-xl"
        onClick={openContactPage}
      >
        <BsChatDotsFill className="text-[20px]" />
      </div>
      
      {isChatModalOpen && (
        <ChatModal isOpen={isChatModalOpen} onClose={handleCloseChatModal} />
      )}
    </>
  );
};

export default Chat;
