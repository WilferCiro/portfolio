import type { IndividualProjectSchema } from "./ProjectsSchema";
import type { StackSchema } from "./StackSchema";

export interface ReviewSchema {
  who: string;
  relationship: string;
  description: string;
  photo?: string;
  linkedIn?: string;
}
export interface WorkSchema {
  name: string;
  id: string;
  position: { es: string; en: string };
  link?: string;
  dates: (string | Date)[];
  images: string[];
  projects: IndividualProjectSchema[];
  stack: StackSchema[];
  reviews?: ReviewSchema[];
}
