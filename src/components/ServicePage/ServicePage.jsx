import React from 'react'
import VerticalLine from '../common/VerticalLine'
import Service from './Service'
import services from '../../data/servicesData'
import SectionHeading from '../common/SectionHeading'

const ServicePage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen'>
        <div className='w-full max-w-3xl p-10 mt-24 rounded-lg md:mt-0 '>
          <SectionHeading title={"Skills & Services"} />
          <div className=''>
            {services.length > 0 && services.map((service, index) => (
              <>
                <div className={`flex ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
                  <Service service={service} />
                </div>

                {services?.length > index + 1 && (
                  <div className='flex justify-center'>
                    <div className=" w-[2px]  bg-gray-400 dark:bg-neutral-700 h-14 rounded-xl ">
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicePage