import type { StackSchema } from "./StackSchema";

export interface IndividualProjectSchema {
  name: string;
  owner: string;
  dates: string[];
  description: string;
  images: string[];
  stack: StackSchema[];
  links?: {
    title: string;
    href: string;
  }[];
}

export interface ProjectsSchema {
  [key: string]: IndividualProjectSchema;
}
