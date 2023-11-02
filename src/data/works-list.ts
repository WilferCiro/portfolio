import { StackList } from "../domain/enums/StackList";
import type { WorkSchema } from "../domain/schemas/WorkSchema";
import allProjects from "./projects-list";

const worksLists: WorkSchema[] = [
  {
    name: "Option",
    id: "option",
    dates: [new Date("2022, August"), "present"],
    position: { es: "Desarrollador Fullstack", en: "Fullstack developer" },
    link: "https://www.option.tech/",
    images: ["option.jpg"],
    projects: [allProjects.AIEPWeb3, allProjects.codelco],
    stack: [
      StackList.NestJS,
      StackList.Express,
      StackList.NextJS,
      StackList.ReactJS,
      StackList.MongoDB,
      StackList.Web3,
      StackList.Ethereum,
      StackList.Azure,
      StackList.GCP,
      StackList.AWS,
    ],
    reviews: [
      {
        description:
          "Wilfer es un profesional que destaca por sus habilidades analíticas, capacidad de resolución de problemas, logrando trabajar en equipo, siempre orientado al logro de objetivos, proponiendo las mejores soluciones en cada uno de los proyectos donde ha participado.",
        relationship: "IT Talent Attraction Specialist",
        who: "Carolina Bravo",
        photo: "/images/reviews/caro.jpeg",
        linkedIn:
          "https://www.linkedin.com/in/carolina-bravo-gallego-643148164/",
      },
    ],
  },
  {
    name: "Misión TIC 2022",
    id: "mintic2022",
    position: {
      es: "Tutor de programación Fullstack",
      en: "full stack programming tutor",
    },
    dates: [new Date("2022, May"), new Date("2022, December")],
    images: ["udea.jpg"],
    projects: [],
    stack: [
      StackList.Python,
      StackList.Java,
      StackList.SpringBoot,
      StackList.PostgreSQL,
      StackList.Html,
      StackList.Css,
      StackList.ReactJS,
      StackList.Flutter,
    ],
    reviews: [
      {
        description:
          "Wilfer es un profesor con grandes capacidades de enseñanza, abierto a compartir su conocimiento, su experiencia en el campo de la tecnología lo hace sentir como un experto cuando explica algún tema, me inspiró a seguir el camino del desarrollo.",
        relationship: "Developer",
        who: "Jenny Cabrejo",
        photo: "/images/reviews/jenny.jpg",
        linkedIn:
          "https://www.linkedin.com/in/jenny-caterin-cabrejo-marin-203967b6/",
      },
      /*{
        who: "Wilfer Daniel Ciro Maya",
        date: "2022",
        relationship: "Reclutadora en Option",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquamoptio doloremque iste, impedit assumenda fugiat eius nullaexercitationem delectus aut, quibusdam qui. Iste voluptatum neque nobis,        ducimus laboriosam quasi.",
      },
      {
        who: "Wilfer Daniel Ciro Maya",
        date: "2022",
        relationship: "Reclutadora en Option",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquamoptio doloremque iste, impedit assumenda fugiat eius nullaexercitationem delectus aut, quibusdam qui. Iste voluptatum neque nobis,        ducimus laboriosam quasi.",
      },*/
    ],
  },
  {
    name: "Negozia CF",
    id: "negoziacf",
    link: "https://negoziacf.com/",
    position: { es: "Desarrollador Fullstack", en: "Fullstack developer" },
    dates: [new Date("2021, July"), new Date("2022, August")],
    images: ["negozia.jpg"],
    projects: [
      allProjects.boNegozia,
      allProjects.dashboardNegozia,
      allProjects.dniReader,
    ],
    stack: [
      StackList.NestJS,
      StackList.Express,
      StackList.ReactJS,
      StackList.NextJS,
      StackList.AWS,
      StackList.Python,
      StackList.Flask,
      StackList.OpenCV,
    ],
    reviews: [
      /*{
        who: "Wilfer Daniel Ciro Maya",
        date: "2022",
        relationship: "Reclutadora en Option",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquamoptio doloremque iste, impedit assumenda fugiat eius nullaexercitationem delectus aut, quibusdam qui. Iste voluptatum neque nobis,        ducimus laboriosam quasi.",
      },
      {
        who: "Wilfer Daniel Ciro Maya",
        date: "2022",
        relationship: "Reclutadora en Option",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquamoptio doloremque iste, impedit assumenda fugiat eius nullaexercitationem delectus aut, quibusdam qui. Iste voluptatum neque nobis,        ducimus laboriosam quasi.",
      },*/
    ],
  },
  {
    name: "Jaivaná",
    id: "jaivana",
    link: "https://www.jaivanaweb.co/",
    position: { es: "Desarrollador Fullstack", en: "Fullstack devloper" },
    dates: [new Date("2020, May"), new Date("2021, July")],
    images: ["jaivana.jpg"],
    projects: [allProjects.laferre],
    stack: [
      StackList.ReactJS,
      StackList.NextJS,
      StackList.ElasticSearch,
      StackList.PostgreSQL,
      StackList.Flutter,
      StackList.Java,
    ],
    reviews: [
      {
        who: "Cristian Ferney Ciro Maya",
        relationship: "Fullstack Developer",
        photo: "/images/reviews/cristian.jpg",
        linkedIn:
          "https://www.linkedin.com/in/cristian-ferney-ciro-maya-9b8b2126a/",
        description:
          "Wilfer como fullstack developer en Jaivaná tuvo un desempeño ejemplar. Es responsable, amable y siempre está abierto a aprender. Su enfoque proactivo en los proyectos no solo mejoró la eficiencia, sino que también elevó el espíritu del equipo. Su actitud positiva y habilidades técnicas hicieron de él un colega invaluable en nuestro equipo de desarrollo.",
      },
      /*{
        who: "Wilfer Daniel Ciro Maya",
        date: "2022",
        relationship: "Reclutadora en Option",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquamoptio doloremque iste, impedit assumenda fugiat eius nullaexercitationem delectus aut, quibusdam qui. Iste voluptatum neque nobis,        ducimus laboriosam quasi.",
      },*/
    ],
  },
  {
    name: "Freelance",
    id: "freelance",
    position: { es: "Desarrollador Fullstack", en: "Fullstack developer" },
    dates: [new Date("2015, January"), "present"],
    images: ["freelance.jpg"],
    projects: [
      allProjects.bdTgrado,
      allProjects.kiwipeluditos,
      allProjects.davinci,
      allProjects.stiIrrigation,
      allProjects.sintel,
    ],
    stack: [
      StackList.NestJS,
      StackList.ReactJS,
      StackList.NextJS,
      StackList.AWS,
      StackList.GCP,
      StackList.Python,
      StackList.Flask,
      StackList.Django,
      StackList.PostgreSQL,
      StackList.MySQL,
      StackList.MongoDB,
      StackList.PHP,
      StackList.C,
      StackList.CPP,
    ],
    reviews: [
      /*{
        who: "Wilfer Daniel Ciro Maya",
        date: "2022",
        relationship: "Reclutadora en Option",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquamoptio doloremque iste, impedit assumenda fugiat eius nullaexercitationem delectus aut, quibusdam qui. Iste voluptatum neque nobis,        ducimus laboriosam quasi.",
      },
      {
        who: "Wilfer Daniel Ciro Maya",
        date: "2022",
        relationship: "Reclutadora en Option",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquamoptio doloremque iste, impedit assumenda fugiat eius nullaexercitationem delectus aut, quibusdam qui. Iste voluptatum neque nobis,        ducimus laboriosam quasi.",
      },*/
    ],
  },
];

export default worksLists;
