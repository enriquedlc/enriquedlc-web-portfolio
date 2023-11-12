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
        <p className={mainStyles.sectionSubText}>My Projects</p>
        <h2 className={mainStyles.sectionHeadText}>Projects.</h2>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="empty-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
          >
            The following are some of the projects I have worked on, those
            showcases my skills and experience in front-end and back-end
            development. Each project has a link to the live version and the
            source code. It reflects my ability to work with different
            technologies and skills to manage projects effectively.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
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
