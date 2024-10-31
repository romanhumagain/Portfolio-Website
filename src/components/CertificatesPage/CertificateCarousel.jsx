import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import certificates from '../../data/certificatesData';

const CertificateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-full mx-auto group">
      <div className="flex items-center justify-center ">
        <img
          src={certificates[currentIndex].image}
          alt={certificates[currentIndex].alt}
          className="h-[240px] max-w-[300px] rounded-lg shadow-lg sm:max-w-[440px] md:max-w-lg lg:max-w-lg sm:h-80 md:h-[360px]"
        />
      </div>

      <div
        className="absolute p-2 text-white transition-opacity transform -translate-y-1/2 bg-gray-500 rounded-full cursor-pointer dark:bg-neutral-700 top-1/2 left-5 sm:left-10 hover:bg-opacity-70"
        onClick={prevSlide}
      >
        <FiChevronLeft size={24} />
      </div>

      <div
        className="absolute p-2 text-white transition-opacity transform -translate-y-1/2 bg-gray-500 rounded-full cursor-pointer dark:bg-neutral-700 top-1/2 right-5 sm:right-10 hover:bg-opacity-70"
        onClick={nextSlide}
      >
        <FiChevronRight size={24} />
      </div>

      <div className="flex items-center justify-center mt-5 space-x-2">
        {certificates.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex
              ? 'bg-gradient-to-r from-pink-600 to-purple-700 h-3 w-3'
              : 'bg-gray-500 dark:bg-gray-300'
              }`}
          />
        ))}
      </div>

      <div className="mt-5 text-center">
        <button
          onClick={() => window.open(certificates[currentIndex].link, '_blank')}
          className="p-2 px-3 font-semibold transition-transform duration-500 ease-in-out shadow-sm cursor-pointer rounded-3xl hover:scale-105 bg-gradient-to-r from-pink-600 to-purple-700 text-neutral-300"
        >
          Show Credentials
        </button>
      </div>
    </div>
  );
};

export default CertificateCarousel;
