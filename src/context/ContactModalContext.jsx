import { useContext, createContext, useState } from "react";

// Create the context
const ContactModalContext = createContext();

export const useContactModal = () => {
  return useContext(ContactModalContext);
};

const ContactModalContextProvider = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  const context = {
    isContactModalOpen,
    setIsContactModalOpen,
    handleOpenModal,
    handleCloseModal,
  
  };

  return (
    <ContactModalContext.Provider value={context}>
      {children}
    </ContactModalContext.Provider>
  );
};

export default ContactModalContextProvider;
