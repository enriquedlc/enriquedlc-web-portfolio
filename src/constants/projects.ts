import {
  coming_soon_leaning_right,
  coming_soon_leaning_left,
  coming_soon_straight,
  PROJECT_HEROS,
} from "../assets/index";

export type Tag = {
  name: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  sourceCodeLink: string;
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
    image: PROJECT_HEROS.article_scanner_hero,
    sourceCodeLink: "https://github.com/enriquedlc/scanner-barcode-archive",
  },
  {
    name: "Article Scanner API",
    description:
      "A REST API designed to facilitate the storage of items from scanned barcodes and other relevant data using NodeJS, express, MVC pattern, MYSQL, zod and more",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "MVC",
        color: "pink-text-gradient",
      },
      {
        name: "zod",
        color: "dark-blue-text-gradient",
      },
      {
        name: "express",
        color: "light-green-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: PROJECT_HEROS.article_scanner_server,
    sourceCodeLink: "https://github.com/enriquedlc/article-scanner-server",
  },
  {
    name: "Soon...",
    description: "soon...",
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
    sourceCodeLink: "https://github.com/enriquedlc",
  },
];
