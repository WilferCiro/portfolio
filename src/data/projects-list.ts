import { StackList } from "../domain/enums/StackList";
import type { ProjectsSchema } from "../domain/schemas/ProjectsSchema";

const allProjects: ProjectsSchema = {
  kiwipeluditos: {
    name: "Kiwipeluditos",
    owner: "Propio",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Plataforma web donde las personas pueden registrar sus mascotas y generar un código QR que al ser escaneado envía la ubicación. También permite gestionar vacunas y enfermedades.",
    images: ["image1.webp", "image2.webp", "image3.webp", "image4.webp"],
    stack: [
      StackList.NestJS,
      StackList.NodeJS,
      StackList.ReactJS,
      StackList.NextJS,
      StackList.PostgreSQL,
      StackList.Typescript,
    ],
    links: [
      {
        title: "Código frontend",
        href: "https://gitlab.com/WilferCiro/kiwipeluditos_front",
      },
      {
        title: "Código backend",
        href: "https://gitlab.com/WilferCiro/kiwipeluditos_api",
      },
    ],
  },
  AIEPWeb3: {
    name: "Certificados web3",
    owner: "AIEP chile",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Plataforma creada para la universidad AIEP de chile, la cual permite generar NFTs de certificados de estudiante a través de la red Ethereum utilizando Web3",
    images: ["image1.png", "image2.png"],
    stack: [
      StackList.NestJS,
      StackList.NodeJS,
      StackList.ReactJS,
      StackList.NextJS,
      StackList.Typescript,
      StackList.Web3,
      StackList.Ethereum,
      StackList.Azure,
    ],
  },
  bdTgrado: {
    name: "BD tgrado",
    owner: "Programa de Ingeniería Electrónica de la Universidad del Quindío",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Plataforma creada para la gestión completa de los trabajos de grado de los estudiantes, permite manejar desde el preinforme, el informe y las notas de los evaluadores.",
    images: [
      "image1.png",
      "image2.webp",
      "image3.webp",
      "image4.webp",
      "image5.webp",
      "image6.webp",
    ],
    stack: [
      StackList.Python,
      StackList.Django,
      StackList.ReactJS,
      StackList.PostgreSQL,
      StackList.Linux,
    ],
    links: [
      {
        title: "Página web",
        href: "https://tgrado.pythonanywhere.com/",
      },
    ],
  },
  codelco: {
    name: "Formularios de datos",
    owner: "Para Codelco Chile",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Formulario de ingesta de datos para gestionar el inventario a través de las métricas descritas por los clientes, permitiendo agregar la información manualmente o através de un excel",
    images: ["image1.png", "image2.png"],
    stack: [StackList.NestJS, StackList.ReactJS, StackList.Azure],
  },
  dniReader: {
    name: "Lector de cédula de ciudadanía colombiana",
    owner: "Para Negozia CF",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Proyecto que permite leer la información de la cédula de ciudadanía a través de visión artificial, además de realizar comparaciones de la huella dactilar y la foto de la persona",
    images: ["image1.png"],
    stack: [
      StackList.Python,
      StackList.Flask,
      StackList.OpenCV,
      StackList.Java,
      StackList.Linux,
    ],
  },
  boNegozia: {
    name: "Backoffice Negozia CF",
    owner: "Para Negozia CF",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Backoffice principal de Negozia CF, permite la configuración de todo el core de crédito, además de generar informes útiles para el equipo de soporte y ventas.",
    images: ["image1.png", "image2.png", "image3.png"],
    stack: [
      StackList.Express,
      StackList.ReactJS,
      StackList.NextJS,
      StackList.NestJS,
      StackList.MongoDB,
      StackList.AWS,
    ],
  },
  dashboardNegozia: {
    name: "Dashboard Negozia CF",
    owner: "Para Negozia CF",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Dashboard creado para la consulta por parte de los clientes el crédito actual, además de permitir la descarga de archivos. Cada aliado de Negozia CF puede configurar su esquema visual.",
    images: ["image1.png"],
    stack: [
      StackList.ReactJS,
      StackList.NestJS,
      StackList.MongoDB,
      StackList.AWS,
    ],
  },
  laferre: {
    name: "La Ferre",
    owner: "Jaivaná",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Ecommerce completo de venta de productos ferreteros, creado para la ferretería ___",
    images: ["image1.jpg", "image2.jpg"],
    stack: [
      StackList.Java,
      StackList.SpringBoot,
      StackList.ReactJS,
      StackList.NextJS,
      StackList.PostgreSQL,
      StackList.ElasticSearch,
      StackList.AWS,
    ],
  },
  stiIrrigation: {
    name: "STI irrigation",
    owner: "Freelance",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Proyecto IoT para el riego automático de un cultivo, mi trabajo allí fue la creación del servidor web y programa de raspberry pi, además de programación de ESP32",
    images: ["image1.webp"],
    stack: [
      StackList.Django,
      StackList.ReactJS,
      StackList.MongoDB,
      StackList.CPP,
      StackList.C,
      StackList.Linux,
    ],
  },
  sintel: {
    name: "Sintel",
    owner: "Trabajo de grado",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Simulador de circuitos digitales, permite exportar el circuito creado a lenguajes VHDL y Verilog, además de ver los valores en tiempo real, funciona para windows y Linux.",
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
      "image6.png",
    ],
    stack: [StackList.Python, StackList.QT5, StackList.Html, StackList.Css],
    links: [
      {
        title: "Repositorio",
        href: "https://gitlab.com/WilferCiro/sintel",
      },
      {
        title: "Página web",
        href: "https://wilferciro.gitlab.io/sintel/",
      },
    ],
  },
  davinci: {
    name: "Davinci",
    owner: "Policarpa Salavarrieta (Quimbaya, Quindío)",
    dates: ["2022-01-01", "2022-01-01"],
    description:
      "Plataforma completa para la administración de toda la parte académica y disciplinaria de los estudiantes, además de la gestión del inventario de la institución",
    images: [
      "image1.png",
      "image2.png",
      "image3.png",
      "image4.png",
      "image5.png",
      "image6.png",
      "image7.png",
    ],
    stack: [StackList.PHP, StackList.MySQL, StackList.Linux],
  },
};

export default allProjects;
