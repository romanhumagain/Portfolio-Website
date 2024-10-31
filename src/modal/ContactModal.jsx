import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ContactModal = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formMessage, setFormMessage] = useState('');

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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const email = formData.get('email');
  
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.")
      toast.error('Invalid email format.');
      
      return; 
    }
  
    // Append access key
    formData.append('access_key', "ad9f78ce-04e6-4b39-85c0-d7c93d3a1b94");
    const json = JSON.stringify(Object.fromEntries(formData));
  
    toast.promise(
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((response) => {
        if (!response.ok) throw new Error('Failed to send');
        return response.json();
      }),
      {
        loading: 'Sending...',
        success: <b>Successfully sent message!</b>,
        error: <b>Something went wrong. Please try again.</b>,
      }
    )
    .then((result) => {
      if (result.success) {
        closeModal();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    })
    .catch((error) => {
      setFormMessage('An error occurred while submitting the form.');
    });
  };
  

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-60 duration-300 ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={handleBackdropClick}
    >
      <div className={`m-6 w-full max-w-sm sm:max-w-md lg:max-w-md p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg transform transition-transform duration-300 ${isModalOpen ? "translate-y-0" : "-translate-y-20"}`}>
        <button
          type="button"
          className="absolute top-3 right-3.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeModal}>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className='mb-6'>
          <h2 className="mt-1 text-[25px] font-bold text-transparent md:text-3xl text-start bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text">
            Contact
          </h2>
          <p className='mt-2 text-[15px] font-light text-gray-600 text-start md:text-md dark:text-gray-400'>
            Feel free to reach out to me directly via email at <a href="mailto:romanhumagain@gmail.com" className="text-purple-700 underline dark:text-purple-500">romanhumagain@gmail.com</a> or simply fill out the contact form below.
          </p>
          <p className='mt-1 font-medium text-gray-600 text-start text-[15px] md:text-md dark:text-gray-400'>Please leave a valid Email to get a reply.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-serif text-gray-800 dark:text-gray-300" htmlFor="fullName">Full Name</label>
            <input className="block w-full p-2 mt-1 bg-gray-200 dark:bg-neutral-700 dark:text-gray-300 focus:outline-none rounded-xl" type="text" id="name" name="name" required />
          </div>

          <div className="mb-4">
            <label className="font-serif text-gray-800 dark:text-gray-300" htmlFor="email">Email</label>
            <input
              className="block w-full p-2 mt-1 bg-gray-200 dark:bg-neutral-700 dark:text-gray-300 focus:outline-none rounded-xl"
              type="text"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
            />
            {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
          </div>

          <div className="mb-4">
            <label className="font-serif text-gray-800 dark:text-gray-300" htmlFor="message">Message</label>
            <textarea className="block w-full p-3 mt-1 bg-gray-200 h-28 dark:bg-neutral-700 dark:text-gray-300 focus:outline-none rounded-xl" id="message" name="message" required />
          </div>

          <button type="submit" className="w-full px-4 py-[6px] mt-4 font-semibold text-white transition duration-200 rounded-full md:py-2 text-md bg-gradient-to-r from-pink-600 to-purple-700">
            Submit
          </button>

          {formMessage && <p className="mt-4 text-sm font-medium text-center text-gray-800 dark:text-gray-300">{formMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
