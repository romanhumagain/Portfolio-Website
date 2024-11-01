import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from 'react-icons/fi';
import { SiImessage } from "react-icons/si";
import { BiSolidMessage } from "react-icons/bi";
import { BiMessage } from "react-icons/bi";
import ContactModal from "./ContactModal";
import { useState } from "react";
const Contact = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };
  
  const openContactPage = () => {
    handleOpenModal();
  };

  return (
    <>


      <div
        className="animate-popup fixed p-[8px]  text-white transition-transform duration-500 rounded-full shadow-xl cursor-pointer md:p-3 right-5 bottom-[94px] md:right-10 md:bottom-[120px] bg-gradient-to-r from-pink-600 to-purple-700 hover:scale-110 hover:shadow-xl"
        onClick={openContactPage}
      >
        <FiMessageSquare className="text-[22px]" />
      </div>
      
      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Contact;