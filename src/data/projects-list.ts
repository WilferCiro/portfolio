import { StackList } from "../domain/enums/StackList";
import type { ProjectsSchema } from "../domain/schemas/ProjectsSchema";

const allProjects: ProjectsSchema = {
  kiwipeluditos: {
    id: "kiwipeluditos",
    name: "Kiwipeluditos",
    owner: "Wilfer Ciro",
    dates: [new Date("2022, January"), new Date("2022, August")],
    description: {
      es: "Plataforma web que permite a los usuarios registrar a sus mascotas y generar un código QR. Al escanearlo, se proporciona la ubicación de la mascota. Además, la plataforma facilita la gestión de vacunas y enfermedades de las mascotas.",
      en: "A web platform that allows users to register their pets and generate a QR code. When scanned, it provides the pet's location. Additionally, the platform facilitates the management of vaccines and illnesses for pets.",
    },
    complete: {
      es: "Esta plataforma fue concebida para ofrecer collares equipados con códigos QR que contienen información completa sobre la mascota. Al escanear el código, se envía un mensaje al correo electrónico del dueño con la ubicación del escaneo. Además de esta funcionalidad, la plataforma facilita la gestión de vacunas, enfermedades y otros datos de la mascota. También envía recordatorios anuales sobre las vacunas necesarias para garantizar la salud continua del animal.",
      en: "This platform was designed to offer collars equipped with QR codes containing complete information about the pet. When the code is scanned, a message is sent to the owner's email with the scan location. In addition to this functionality, the platform streamlines the management of vaccines, illnesses, and other pet-related data. It also sends annual reminders about necessary vaccinations to ensure the continuous health of the animal.",
    },
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
        title: { es: "Código frontend", en: "Frontend code" },
        href: "https://gitlab.com/WilferCiro/kiwipeluditos_front",
      },
      {
        title: { es: "Código backend", en: "Backend code" },
        href: "https://gitlab.com/WilferCiro/kiwipeluditos_api",
      },
    ],
  },
  bdTgrado: {
    id: "bdTgrado",
    name: "BD tgrado",
    owner: "Ingeniería Electrónica, Universidad del Quindío",
    dates: [new Date("2016, May"), new Date("2021, May")],
    description: {
      es: "Esta plataforma tiene por objetivo gestionar de forma integral los trabajos de grado de los estudiantes. Permite el manejo completo, desde el preinforme hasta el informe final, incluyendo las evaluaciones de los revisores y las calificaciones correspondientes.",
      en: "This platform aims to comprehensively manage students' thesis projects. It enables complete management, from the preliminary report to the final report, including assessments by reviewers and corresponding grades.",
    },
    complete: {
      es: "Esta plataforma fue desarrollada para facilitar la gestión completa de los trabajos de grado del programa de Ingeniería Electrónica de la Universidad del Quindío. Con la capacidad de crear tres roles distintos (estudiante, evaluador/director y administrador), cada uno desempeña su función específica en el proceso de cada trabajo de grado. La plataforma permite la carga de informes y preinformes, asignación de evaluadores y la calificación final. Además, integra herramientas de gestión como calendarios, gestión de documentos, manuales de trabajos de grado y un blog que ofrece información útil a los usuarios.",
      en: "This platform was developed to streamline the comprehensive management of thesis projects within the Electronic Engineering program at the University of Quindío. With the ability to create three distinct roles (student, evaluator/supervisor, and administrator), each role performs its specific function in the process of each thesis project. The platform allows the upload of reports and preliminary reports, assignment of evaluators, and final grading. Additionally, it integrates management tools such as calendars, document management, thesis project manuals, and a blog that provides useful information to users.",
    },
    images: [
      "image1.webp",
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
        title: { es: "Página web", en: "Webpage" },
        href: "https://tgrado.pythonanywhere.com/",
      },
    ],
  },
  boNegozia: {
    id: "boNegozia",
    name: "Backoffice Negozia CF",
    owner: "Negozia CF",
    dates: [new Date("2021, July"), new Date("2022, August")],
    description: {
      es: "Backoffice principal de Negozia CF, permite la configuración de todo el core de crédito, además de generar informes útiles para el equipo de soporte y ventas.",
      en: "Main backoffice of Negozia CF, allowing configuration of the entire credit core, in addition to generating useful reports for the support and sales team.",
    },
    images: ["image1.webp", "image2.webp", "image3.webp"],
    stack: [
      StackList.Express,
      StackList.ReactJS,
      StackList.NextJS,
      StackList.NestJS,
      StackList.MongoDB,
      StackList.AWS,
    ],
  },
  AIEPWeb3: {
    id: "AIEPWeb3",
    name: "Certificados web3",
    owner: "AIEP chile",
    dates: [new Date("2023, October"), new Date("2023, November")],
    description: {
      es: "Esta plataforma fue desarrollada específicamente para la Universidad AIEP de Chile. Permite la creación de NFTs para certificados de estudiantes mediante la red Ethereum, utilizando tecnología Web3.",
      en: "This platform was specifically developed for AIEP University in Chile. It allows the creation of NFTs (Non-Fungible Tokens) for student certificates using the Ethereum network, utilizing Web3 technology.",
    },
    images: ["image1.webp", "image2.png", "image3.png", "image4.png"],
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
  ddd: {
    name: "Backends con arquitectura DDD",
    id: "ddd",
    owner: "Freelance",
    dates: [new Date("2023, May"), "Presente"],
    description: {
      es: "Repositorio con proyectos backend con distintos lenguajes y frameworks utilizando arquitectura hexagonal, además de diferentes gestores de bases de datos.",
      en: "Repository with backend projects using various languages and frameworks, employing hexagonal architecture and different database management systems.",
    },
    images: ["image1.png"],
    stack: [StackList.NestJS, StackList.PHP, StackList.Flask],
    links: [
      {
        title: { es: "Repositorio", en: "Repository" },
        href: "https://github.com/WilferCiro/hexagonal",
      },
    ],
  },
  codelco: {
    id: "codelco",
    name: "Formularios de datos",
    owner: "Codelco Chile",
    dates: [new Date("2022, August"), new Date("2023, January")],
    description: {
      es: "Formulario de ingesta de datos para gestionar el inventario a través de las métricas descritas por los clientes, permitiendo agregar la información manualmente o através de un excel.",
      en: "Data ingestion form for managing inventory based on customer-specified metrics, allowing manual entry of information or importation through an Excel file.",
    },
    complete: {
      es: "Este proyecto se realizó para ofrecer una solución integral para la gestión de inventarios y el cálculo de recursos en la industria minera en Codelco Chile. Permite la ingesta de datos manual o a través de archivos de Excel, ofreciendo flexibilidad a los usuarios. El formulario integra datos en un proceso completo de análisis, proporcionando información clave para decisiones estratégicas. Esta herramienta robusta es un activo valioso, contribuyendo a la eficiencia operativa y la toma de decisiones informada.",
      en: "This project was undertaken to provide a comprehensive solution for inventory management and resource calculation in the mining industry at Codelco Chile. It allows manual data entry or data ingestion through Excel files, offering flexibility to users. The form integrates data into a complete analysis process, providing key information for strategic decisions. This robust tool serves as a valuable asset, contributing to operational efficiency and informed decision-making.",
    },
    images: ["image1.png", "image2.png"],
    stack: [StackList.NestJS, StackList.ReactJS, StackList.Azure],
  },
  dniReader: {
    id: "dniReader",
    name: "Lector de cédula de ciudadanía colombiana",
    owner: "Negozia CF",
    dates: [new Date("2021, July"), new Date("2022, August")],
    description: {
      es: "Proyecto que permite leer la información de la cédula de ciudadanía a través de visión artificial, además de realizar comparaciones de la huella dactilar y la foto de la persona.",
      en: "Project that enables reading citizen ID information through computer vision, in addition to comparing fingerprint and facial recognition data of the individual.",
    },
    images: ["image1.jpg"],
    stack: [
      StackList.Python,
      StackList.Flask,
      StackList.OpenCV,
      StackList.Java,
      StackList.Linux,
    ],
  },
  dashboardNegozia: {
    id: "dashboardNegozia",
    name: "Dashboard Negozia CF",
    owner: "Negozia CF",
    dates: [new Date("2021, July"), new Date("2022, August")],
    description: {
      es: "Dashboard creado para la consulta por parte de los clientes el crédito actual, además de permitir la descarga de archivos. Cada aliado de Negozia CF puede configurar su esquema visual.",
      en: "Dashboard created for customers to view their current credit status, as well as enabling file downloads. Each Negozia CF partner can customize their visual layout.",
    },
    images: ["image1.png"],
    stack: [
      StackList.ReactJS,
      StackList.NestJS,
      StackList.MongoDB,
      StackList.AWS,
    ],
  },
  laferre: {
    id: "laferre",
    name: "La Ferre",
    owner: "Jaivaná",
    dates: [new Date("2020, May"), new Date("2021, July")],
    description: {
      es: "Ecommerce completo de venta de productos ferreteros, creado para la ferretería Sumatec.",
      en: "Full-fledged e-commerce platform for the sale of hardware products, created for Sumatec hardware store.",
    },
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
    id: "stiIrrigation",
    name: "STI irrigation",
    owner: "Freelance",
    dates: [new Date("2018, July"), new Date("2020, December")],
    description: {
      es: "Proyecto IoT para el riego automático de un cultivo, mi trabajo allí fue la creación del servidor web y programa de raspberry pi, además de programación de ESP32.",
      en: "IoT project for automatic irrigation of a crop. My role involved creating the web server and program for Raspberry Pi, as well as programming ESP32 devices.",
    },
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
    id: "sintel",
    name: "Sintel",
    owner: "Uniquindío",
    dates: [new Date("2019, January"), new Date("2020, Febrary")],
    description: {
      es: "Simulador de circuitos digitales, permite exportar el circuito creado a lenguajes VHDL y Verilog, además de ver los valores en tiempo real, funciona para windows y Linux.",
      en: "Digital circuit simulator that allows exporting the created circuit to VHDL and Verilog languages, in addition to viewing real-time values. It works for both Windows and Linux platforms.",
    },
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
        title: { es: "Repositorio", en: "Repository" },
        href: "https://gitlab.com/WilferCiro/sintel",
      },
      {
        title: { es: "Página web", en: "Webpage" },
        href: "https://wilferciro.gitlab.io/sintel/",
      },
    ],
  },
  davinci: {
    id: "davinci",
    name: "Davinci",
    owner: "Policarpa Salavarrieta (Quimbaya, Quindío)",
    dates: [new Date("2015, January"), new Date("2018, February")],
    description: {
      es: "Plataforma completa para la administración de toda la parte académica y disciplinaria de los estudiantes, además de la gestión del inventario de la institución.",
      en: "Complete platform for the management of all academic and disciplinary aspects of students, as well as the institution's inventory management.",
    },
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
