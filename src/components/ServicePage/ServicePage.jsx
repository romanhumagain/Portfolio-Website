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
          <SectionHeading title={"My Expertise"} />
          <div className=''>
            {services.length > 0 && services.map((service, index) => (
              <div key={index}>
                <div className={`flex ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
                  <Service service={service} />
                </div>

                {services?.length > index + 1 && (
                  <div className="flex justify-center">
                    <div className="w-[2px] h-12 md:h-14 rounded-xl bg-gradient-to-b from-neutral-800 via-gray-500 to-gray-400 shadow-lg">
                    </div>
                  </div>

                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicePage