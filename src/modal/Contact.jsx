import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from 'react-icons/fi';
import { SiImessage } from "react-icons/si";
import { BiSolidMessage } from "react-icons/bi";
import { BiMessage } from "react-icons/bi";
import ContactModal from "./ContactModal";
import { useState } from "react";
import { useContactModal } from "../context/ContactModalContext";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const navigate = useNavigate();

  const { handleOpenModal, isContactModalOpen, setIsContactModalOpen, handleCloseModal } = useContactModal();

  const openContactPage = () => {
    handleOpenModal();
  };

  return (
    <>
      <div
        className="animate-popup fixed p-[8px] text-white transition-transform duration-500 rounded-full shadow-xl cursor-pointer md:p-[10px] right-6 bottom-[94px] md:right-10 md:bottom-[110px] bg-gradient-to-r from-red-200 to-red-600 hover:scale-110 hover:shadow-xl"
        onClick={openContactPage}
      >
        <MdEmail className="text-[20px]" />
      </div>


      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Contact;
