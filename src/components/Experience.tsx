import { motion } from "framer-motion";
import { Key } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Experience, experiences } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { mainStyles } from "../styles/mainStyles";
import { textVariant } from "../utils/motion";

interface ExperienceCardProps {
	experience: Experience;
	key: Key;
}

function ExperienceCard(props: ExperienceCardProps) {
	const { experience } = props;

	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.title}
						className="w-full h-full object-contain rounded-full"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
					{experience.company}
				</p>
			</div>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.description.map((description, index) => (
					<li
						key={`experience-description${index}`}
						className="text-white-100 text-[14px] pl-1.5 tracking-wider"
					>
						{description}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
}

function ExperienceTimeLine() {
	return (
		<>
			{/* @ts-ignore */}
			<motion.div variants={textVariant()}>
				<p className={mainStyles.sectionSubText}>What I've done so far</p>
				<h2 className={mainStyles.sectionHeadText}>Experience.</h2>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
}

export default SectionWrapper(ExperienceTimeLine, "experience");
