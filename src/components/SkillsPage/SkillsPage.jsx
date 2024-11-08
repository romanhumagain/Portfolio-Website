import Skills from "./Skills"
import skills from "../../data/skillsData"
import VerticalLine from "../common/VerticalLine"
import SectionHeading from "../common/SectionHeading"
import { IconCloudDemo } from "../ui/IconCloudDemo"
import CoolMode from "../ui/CoolMode"

const SkillsPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen px-8 mb-28 md:mb-10 lg:mb-0'>
        <div className='w-full max-w-4xl py-8 shadow-lg md:mt-28 rounded-3xl '>

          <div className="">
            <div className="">
              <SectionHeading title={"Skills"} />
            </div>

            <div className="">
              <IconCloudDemo />
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