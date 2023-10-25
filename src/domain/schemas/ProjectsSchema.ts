import type { StackSchema } from "./StackSchema";

export interface IndividualProjectSchema {
  name: string;
  id: string;
  owner: string;
  dates: string[];
  description: string;
  images: string[];
  stack: StackSchema[];
  complete?: string;
  links?: {
    title: string;
    href: string;
  }[];
}

export interface ProjectsSchema {
  [key: string]: IndividualProjectSchema;
}
