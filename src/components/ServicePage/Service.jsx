const Service = ({ service }) => {
  return (
    <>
      <div className="flex flex-col w-full max-w-[420px] gap-2 p-3 px-3 transition-transform duration-700 shadow-md md:p-5 bg-gradient-to-l from-slate-100 to-slate-300 dark:from-neutral-800 dark:to-neutral-900 item-start rounded-2xl hover:scale-105">
        <service.icon className='text-3xl text-gray-800 md:text-4xl dark:text-gray-300' />
        <p className='text-[19px] md:text-[22px] font-semibold text-gray-800 dark:text-gray-300'>{service.title}</p>
        <p className='text-sm font-medium text-gray-700 dark:text-gray-400'>{service.technologies}</p>
        <p className='text-sm font-normal text-gray-800 dark:text-gray-400 md:text-md'>
          {service.description}
        </p>
      </div>
    </>
  )
}

export default Service