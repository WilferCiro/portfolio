import { StackList } from "../domain/enums/StackList";
import type { WorkSchema } from "../domain/schemas/WorkSchema";
import allProjects from "./projects-list";

const worksLists: WorkSchema[] = [
  {
    name: "Option",
    id: "option",
    dates: ["Agosto 2022", "Presente"],
    position: "Desarrollador Fullstack",
    link: "https://www.option.tech/",
    description: "",
    images: ["option.jpg"],
    projects: [/*allProjects.AIEPWeb3,*/ allProjects.codelco],
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
        relationship: "Reclutadora IT",
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
    position: "Tutor de programación Fullstack",
    dates: ["Mayo 2022", "Diciembre 2022"],
    description: "",
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
    position: "Desarrollador Fullstack",
    dates: ["Julio 2021", "Agosto 2022"],
    description: "",
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
    position: "Desarrollador Fullstack",
    dates: ["Mayo 2020", "Julio 2021"],
    description: "",
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
    name: "Freelance",
    id: "freelance",
    position: "Desarrollador Fullstack",
    dates: ["2015", "Presente"],
    description: "",
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
