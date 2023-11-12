import { CHALLENGES_HEROS } from "../assets";
import { Tag } from "./projects";

export type Challenge = {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  sourceCodeLink: string;
};

/**
 * 1. https://github.com/enriquedlc/just-conding/tree/main/codember
 */

export const challenges: Challenge[] = [
  {
    name: "Codember",
    description: "Codember is a game with programming challenges and secrets.",
    tags: [
      {
        name: "challenges",
        color: "red-text-gradient",
      },
      {
        name: "skills",
        color: "blue-text-gradient",
      },
      {
        name: "programming",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "dark-blue-text-gradient",
      },
      {
        name: "rust",
        color: "orange-text-gradient",
      },
    ],
    image: CHALLENGES_HEROS.codember_hero,
    sourceCodeLink:
      "https://github.com/enriquedlc/just-conding/tree/main/codember",
  },
];
