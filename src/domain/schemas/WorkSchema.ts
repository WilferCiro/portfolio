import type { IndividualProjectSchema } from "./ProjectsSchema";
import type { StackSchema } from "./StackSchema";

export interface ReviewSchema {
  who: string;
  relationship: string;
  description: string;
  date: string;
  photo?: string;
  linkedIn?: string;
}
export interface WorkSchema {
  name: string;
  id: string;
  position: string;
  link?: string;
  dates: string[];
  images: string[];
  description: string;
  projects: IndividualProjectSchema[];
  stack: StackSchema[];
  reviews?: ReviewSchema[];
}
