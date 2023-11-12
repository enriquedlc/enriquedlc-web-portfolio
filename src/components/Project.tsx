import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { mainStyles } from "../styles/mainStyles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { Project, projects } from "../constants/projects";
import { github } from "../assets/index";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { project, index } = props;
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <div
                onClick={() => window.open(project.sourceCodeLink, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-poiter "
              >
                <img src={github} alt="github" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white text-[24px] font-bold">{project.name}</h3>
            <p
              className="mt-2 text-secondary text-[15px]"
              style={{ margin: 0 }}
            >
              {project.description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <p
                key={`${tag.name}${index}`}
                className={`${tag.color} text-[14px]`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

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
          {projects.map((project, index) => (
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
