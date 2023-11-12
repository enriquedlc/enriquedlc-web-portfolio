import { web, mobile, backend } from "../assets/index";

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
