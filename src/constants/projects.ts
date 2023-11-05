import {
	coming_soon_leaning_right,
	coming_soon_leaning_left,
	coming_soon_straight,
	HEROS,
} from "../assets/index";

type Tag = {
	name: string;
	color: string;
};

export type Project = {
	name: string;
	description: string;
	tags: Tag[];
	image: string;
	source_code_link: string;
};

export const projects: Project[] = [
	{
		name: "Article Scanner",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react native",
				color: "blue-text-gradient",
			},
			{
				name: "zustand",
				color: "pink-text-gradient",
			},
			{
				name: "camera",
				color: "green-text-gradient",
			},
			{
				name: "accessibility",
				color: "red-text-gradient",
			},
		],
		image: HEROS.article_scanner_hero,
		source_code_link: "https://github.com/enriquedlc/scanner-barcode-archive",
	},
	{
		name: "Soon...",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: coming_soon_straight,
		source_code_link: "https://github.com/enriquedlc",
	},
	{
		name: "Soon...",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: coming_soon_leaning_left,
		source_code_link: "https://github.com/enriquedlc",
	},
];
