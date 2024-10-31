import Skills from "./Skills"
import skills from "../../data/skillsData"
import VerticalLine from "../common/VerticalLine"
import SectionHeading from "../common/SectionHeading"

const SkillsPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen px-8'>
        <div className='w-full max-w-4xl py-8 mt-24 shadow-lg mt-30 md:mt-0 rounded-3xl '>

          <div className="md:p-4 ">
            <div className="">
              <SectionHeading title={"Skills"} />
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-5">

              {skills.map((skillCategory, categoryIndex) => (
                skillCategory.details.map((skill, skillIndex) => (
                  <Skills key={skillIndex} skill={skill} />
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {/* <VerticalLine /> */}
      </div>

    </>
  )
}

export default SkillsPage