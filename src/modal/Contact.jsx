import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from 'react-icons/fi';
import ContactModal from "./ContactModal";
import { useContactModal } from "../context/ContactModalContext";
import {motion} from 'framer-motion'

const Contact = () => {
  const navigate = useNavigate();

  const { handleOpenModal, isContactModalOpen, setIsContactModalOpen, handleCloseModal } = useContactModal();

  const openContactPage = () => {
    handleOpenModal();
  };

  return (
    <>
      <motion.div
        className="animate-popup fixed p-[9px] text-white transition-transform duration-500 rounded-full shadow-xl cursor-pointer md:p-[12px] right-6 bottom-[96px] md:right-10 md:bottom-[115px] bg-gradient-to-r from-red-500 to-purple-600 hover:scale-110 hover:shadow-xl"
        onClick={openContactPage}

        initial={{ scale: 0.9, opacity: 0, x: 25 }} 
          animate={{ scale: 1, opacity: 1, x: 0 }} 
          transition={{
            duration: 0.5,
            ease: 'easeOut', 
          }}
      >
        <FiMessageSquare className="text-[22px]" />
      </motion.div>


      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Contact;
