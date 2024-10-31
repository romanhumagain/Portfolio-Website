const Skills = ({ skill }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-1 px-6 py-2 transition-transform duration-700 shadow-md hover:shadow-xl dark:hover:shadow-md rounded-xl bg-gradient-to-r dark:bg-gradient-to-r from-slate-200 via-slate-200 to-slate-300 md:from-slate-300 md:via-slate-300 md:to-slate-400 dark:from-neutral-800 dark:to-neutral-900'>
        <p className='text-lg md:text-xl' style={{ color: skill.brand_color }}>
          <skill.icon />
        </p>
        <p className='mt-1 font-semibold text-gray-800 text-[15px] md:text-md dark:text-gray-400'>{skill.name}</p>
      </div>
    </>
  )
}

export default Skills
