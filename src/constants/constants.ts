import { web, mobile, backend } from "../assets";

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
