import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

import { mainStyles } from "../styles/mainStyles";
import { technologies } from "../constants/technologies";
import { textVariant } from "../utils/motion";

function Tech() {
	return (
		<>
			<motion.div className="pb-10 text-center" variants={textVariant("")}>
				<h2 className={mainStyles.sectionHeadText}>Tech Stack</h2>
				<p className={mainStyles.sectionSubText}>the tech stack I'm familiar with and growing ✨</p>
			</motion.div>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</>
	);
}

export default SectionWrapper(Tech, "");
