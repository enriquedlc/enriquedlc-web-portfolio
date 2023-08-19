import {
	html,
	css,
	javascript,
	typescript,
	reactjs,
	// redux,
	nodejs,
	// mongodb,
	git,
	github,
	java,
	springboot,
	mysql,
	ionic,
	web,
	mobile,
	backend,
	salesianosIcon,
	itopIcon,
} from "../assets/index";

// Navbar constants
export const navTitles = [
	{
		id: "about",
		name: "About",
	},
	{
		id: "projects",
		name: "Projects",
	},
	{
		id: "contact",
		name: "Contact",
	},
];

export type DeveloperArea = {
	title: string;
	icon: string;
};

export const developerAreas: DeveloperArea[] = [
	{
		title: "Web developer",
		icon: web,
	},
	{
		title: "Mobile developer",
		icon: mobile,
	},
	{
		title: "Backend developer",
		icon: backend,
	},
];

// Experience
export interface Experience {
	title: string;
	company: string;
	icon: string;
	iconBg: string;
	date: string;
	description: string[];
}

export const experiences: Experience[] = [
	{
		title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
		company: "Salesianos",
		icon: salesianosIcon,
		iconBg: "#383E56",
		date: "September 2021 - May 2023",
		description: [
			"Proficient in creating multiplatform applications for web, mobile, and backend environments",
			"Skilled in developing web applications using ReactJS, covering aspects like React Router, custom hooks, context API, MERN stack implementation, and REST-based data retrieval",
			"Mobile applications using React Native, encompassing skills in React Navigation, Expo, utilization of native device capabilities, and mobile storage.",
			"Capable of building backend applications using technologies such as NodeJS, Express, MySQL, Java, and Spring Boot, following REST principles for robust API development",
			"Implementing and designing UI with Figma.",
		],
	},
	{
		title: "Web developer",
		company: "Itop Consulting",
		icon: itopIcon,
		iconBg: "#383E56",
		date: "March 2023 - May 2023",
		description: [
			"Developing web applications using Ionic Framework in conjunction with ReactJS, integrating functionalities like camera and storage access.",
			"Developed and implemented a solution to engage with the embedded browser database, utilizing SQLite to enable offline functionality and enhance user experience.",
			"Implementing responsive design with CSS and Sass",
		],
	},
	{
		title: "Web developer / programmer",
		company: "Itop Consulting",
		icon: itopIcon,
		iconBg: "#383E56",
		date: "March 2023 - Present",
		description: [
			"Developing web applications, managing and validating forms, consuming endpoints.",
			"Making user friendly and accessible interfaces.",
			"Introduction to SAP Business One, database management and data flow.",
		],
	},
];

// import technologiesç

export const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	// {
	// 	name: "Redux Toolkit",
	// 	icon: redux,
	// },
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Ionic Framework",
		icon: ionic,
	},
	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },
	{
		name: "git",
		icon: git,
	},
	{
		name: "GitHub",
		icon: github,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "Spring Boot",
		icon: springboot,
	},
	{
		name: "MySQL",
		icon: mysql,
	},
];
