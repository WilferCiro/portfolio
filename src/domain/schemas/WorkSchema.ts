import type { IndividualProjectSchema } from "./ProjectsSchema";
import type { StackSchema } from "./StackSchema";

export interface WorkSchema {
  name: string;
  dates: string[];
  images: string[];
  description: string;
  projects: IndividualProjectSchema[];
  stack: StackSchema[];
}
