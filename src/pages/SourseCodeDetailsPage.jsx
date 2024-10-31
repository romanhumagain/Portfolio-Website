import React from 'react';
import { useNavigate } from 'react-router-dom';

const SourceCodeDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 dark:from-neutral-900 dark:to-neutral-950" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div className="max-w-lg p-8 text-center bg-white rounded-lg shadow-lg dark:bg-neutral-800">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Source Code Unavailable
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          The source code of projects is not yet available. Please check back later for updates.
        </p>
        <p className="mt-2 font-medium text-gray-600 dark:text-gray-400">
          We appreciate your patience!
        </p>
        <div className="mt-8">
          <p
            className="inline-block px-6 py-3 font-semibold text-white transition duration-200 transform rounded-full shadow-md cursor-pointer bg-gradient-to-r from-pink-600 to-purple-700 hover:opacity-90 hover:scale-105 hover:shadow-lg"
            onClick={() => navigate('/')}
          >
            Go Back
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourceCodeDetailsPage;
