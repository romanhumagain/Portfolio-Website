
import projects from './projectsData'

const ProjectCard = () => {
  const columns = {
    1: [],
    2: [],
    3: []
  };

  projects.forEach((project) => {
    columns[project.column].push(project);
  });

  return (
    <>
      <div className='grid grid-cols-12 gap-2 p-6 md:gap-5'>
       
        <div className='flex flex-col col-span-4 gap-5'>
          {columns[1].map((project, index) => (
            <div key={index} className='relative'>
              <img
                src={project.img}
                className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'
                alt={project.alt}
              />
              <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-700 bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100'>
                <p className='mx-8 text-[13px] font-semibold text-white md:text-md'>{project.title}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className='flex flex-col items-center justify-center col-span-4 gap-5'>
          {columns[2].map((project, index) => (
            <div key={index} className='relative'>
              <img
                src={project.img}
                className='cursor-pointer w-[63px] transition-transform duration-700 rounded-lg h-[136px] hover:scale-105 lg:h-48 md:h-[120px] md:w-[90px]'
                alt={project.alt}
              />
              <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-700 bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100'>
                <p className='mx-8 text-[13px] font-semibold text-white md:text-md'>{project.title}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className='flex flex-col col-span-4 gap-6'>
          {columns[3].map((project, index) => (
            <div key={index} className='relative'>
              <img
                src={project.img}
                className='transition-transform duration-700 rounded-lg cursor-pointer hover:scale-105'
                alt={project.alt}
              />
              <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-700 bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100'>
                <p className='mx-8 text-[13px] font-semibold text-white md:text-md'>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
