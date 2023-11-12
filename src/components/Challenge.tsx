import { motion } from "framer-motion";
import { mainStyles } from "../styles/mainStyles";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./Project";
import { challenges } from "../constants/challenges";
import { SectionWrapper } from "../hoc";

export function Works() {
  return (
    <>
      {/* @ts-ignore */}
      <motion.div variants={textVariant()}>
        <p className={`${mainStyles.sectionSubText} text-1xl font-bold`}>
          Challenges
        </p>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="empty-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
          >
            The following are some challenges I have worked on, those showcases
            programming skills. Each challenge has a link to the repo where the
            source code is.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7 items-center justify-center">
          {challenges.map((project, index) => (
            <ProjectCard
              key={`${project.name}${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
export default SectionWrapper(Works, "projects");
