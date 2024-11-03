import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from 'react-icons/fi';
import ContactModal from "./ContactModal";
import { useContactModal } from "../context/ContactModalContext";

const Contact = () => {
  const navigate = useNavigate();

  const { handleOpenModal, isContactModalOpen, setIsContactModalOpen, handleCloseModal } = useContactModal();

  const openContactPage = () => {
    handleOpenModal();
  };

  return (
    <>
      <div
        className="animate-popup fixed p-[9px] text-white transition-transform duration-500 rounded-full shadow-xl cursor-pointer md:p-[12px] right-6 bottom-[98px] md:right-10 md:bottom-[120px] bg-gradient-to-r from-pink-700 to-purple-600 hover:scale-110 hover:shadow-xl"
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
