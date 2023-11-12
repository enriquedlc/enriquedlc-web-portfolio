import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc";

import {
  type DeveloperArea,
  developerAreas,
} from "../constants/developerAreas";
import { fadeIn, textVariant } from "../utils/motion";

import { mainStyles } from "../styles/mainStyles";

function About() {
  return (
    <>
      <motion.div variants={textVariant("")}>
        <p className={mainStyles.sectionSubText}>Introduction</p>
        <h2 className={mainStyles.sectionHeadText}>Overview</h2>
      </motion.div>
      {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
      <motion.a
        className="mt-4 text-secondary text-[16px] max-w-3xl leading=[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        A professional with strong technical skills in areas such as Node.js,
        React.js, JavaScript, TypeScript, Java, Spring Boot, MySQL Git/GitHub,
        and Ionic Framework. In addition to my technical experience, I stand out
        as a kind and enthusiastic individual, enabling me to collaborate
        effectively in teams and establish positive relationships. My ability to
        learn allows me to quickly adapt to new challenges and acquire
        up-to-date knowledge in the field of technology. I am always motivated
        to learn, to overcome obstacles, and to find creative solutions to the
        problems that arise.
      </motion.a>
      <div className="mt-20 flex flex-wrap gap-10">
        {developerAreas.map((area, index) => (
          <AreaCard key={area.title} index={index} area={area} />
        ))}
      </div>
    </>
  );
}

interface AreaCardProps {
  area: DeveloperArea;
  index: number;
  key: string;
}

function AreaCard(props: AreaCardProps) {
  const { area, index } = props;

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <motion.div
          // @ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[21px] py-5 px-12 min-h-[270px] flex justify-evenly items-center flex-col"
        >
          <img
            src={area.icon}
            alt={area.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {area.title}
          </h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}

export default SectionWrapper(About, "about");
