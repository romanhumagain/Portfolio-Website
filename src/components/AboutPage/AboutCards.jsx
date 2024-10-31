import { FaCode } from 'react-icons/fa';
import { LiaCertificateSolid } from "react-icons/lia";

const AboutCards = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-md px-6 py-3 transition-transform duration-300 shadow-lg md:max-w-lg hover:shadow-xl bg-slate-200 md:bg-slate-300 dark:bg-neutral-800 rounded-xl ">
        <FaCode className="mb-2 text-[32px] md:text-5xl text-slate-700 dark:text-slate-200" />

        <div className='flex items-center mt-1'>
          <p className="text-[35px] md:text-[44px] font-semibold text-gray-800 dark:text-gray-100">
            15
          </p>
          <p className="text-[35px] md:text-[44px] font-bold text-gray-800 dark:text-gray-100">
            +
          </p>
        </div>
        <p className="mt-2 font-medium text-center text-gray-600 text-md md:text-lg dark:text-gray-400">
          Projects Completed
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-md px-6 py-3 transition-transform duration-300 shadow-lg md:max-w-lg bg-slate-200 md:bg-slate-300 dark:bg-neutral-800 rounded-xl hover:shadow-xl">
        <LiaCertificateSolid className="mb-2 text-[32px] md:text-5xl text-slate-700 dark:text-slate-200" />


        <div className='flex items-center mt-1'>
          <p className="text-[35px] md:text-[44px] font-semibold text-gray-800 dark:text-gray-100">
            20
          </p>
          <p className="text-[35px] md:text-[44px] font-bold text-gray-800 dark:text-gray-100">
            +
          </p>
        </div>
        <div>
          <p className="mt-1 font-medium text-center text-gray-600 text-md md:text-lg dark:text-gray-400">
            Certificates &
          </p>

          <p className="font-medium text-center text-gray-600 text-md md: dark:text-gray-400">
            Achievement
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutCards