import type { StackSchema } from "../schemas/StackSchema";

interface Schema {
  [key: string]: StackSchema;
}

export const StackList: Schema = {
  NestJS: { title: "Nest.js", icon: "NestJS.svg" },
  NextJS: { title: "Next.js", icon: "NextJS.svg" },
  NodeJS: { title: "Node.js", icon: "NodeJS.svg" },
  ReactJS: { title: "React.js", icon: "ReactJS.svg" },
  ReactNative: { title: "React native", icon: "ReactNative.svg" },
  PostgreSQL: { title: "PostgreSQL", icon: "PostgreSQL.svg" },
  Flask: { title: "Flask", icon: "Flask.svg" },
  Python: { title: "Python", icon: "Python.svg" },
  Django: { title: "Django", icon: "Django.svg" },
  Java: { title: "Java", icon: "Java.svg" },
  SpringBoot: { title: "Spring Boot", icon: "SpringBoot.svg" },
  ElasticSearch: { title: "Elastic Search", icon: "ElasticSearch.svg" },
  MongoDB: { title: "MongoDB", icon: "MongoDB.svg" },
  Flutter: { title: "Flutter", icon: "Flutter.svg" },
  Express: { title: "Express js", icon: "Express.svg" },
  Html: { title: "Html", icon: "Html.svg" },
  Css: { title: "Css", icon: "Css.svg" },
  Javascript: { title: "Javascript", icon: "Javascript.svg" },
  C: { title: "C", icon: "C.svg" },
  CPP: { title: "C++", icon: "CPP.svg" },
  QT5: { title: "QT5", icon: "QT5.svg" },
  AWS: { title: "AWS", icon: "AWS.svg" },
  Azure: { title: "Azure", icon: "Azure.svg" },
  GCP: { title: "GCP", icon: "GCP.svg" },
  Typescript: { title: "Typescript", icon: "Typescript.svg" },
  Web3: { title: "Web3", icon: "Web3.svg" },
  Ethereum: { title: "Ethereum", icon: "Ethereum.svg" },
  Linux: { title: "Linux", icon: "Linux.svg" },
  OpenCV: { title: "OpenCV", icon: "OpenCV.svg" },
  PHP: { title: "PHP", icon: "PHP.svg" },
  MySQL: { title: "MySQL", icon: "MySQL.svg" },
  Terraform: { title: "Terraform", icon: "Terraform.svg" },
};
