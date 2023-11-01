import type { StackSchema } from "./StackSchema";

export interface IndividualProjectSchema {
  name: string;
  id: string;
  owner: string;
  dates: string[];
  images: string[];
  stack: StackSchema[];
  description: {
    en: string;
    es: string;
  };
  complete?: {
    en: string;
    es: string;
  };
  links?: {
    title: {
      en: string;
      es: string;
    };
    href: string;
  }[];
}

export interface ProjectsSchema {
  [key: string]: IndividualProjectSchema;
}
