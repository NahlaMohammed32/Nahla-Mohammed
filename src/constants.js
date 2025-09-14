// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mvcLogo from './assets/tech_logo/mvc.jpeg';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import sqlLogo from './assets/tech_logo/sqlserver.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import khamsatLogo from './assets/company_logo/khamsat.png';
import itiLogo from './assets/company_logo/iti.png';

import netLogo from './assets/tech_logo/net.png'
// Education Section Logo's
import agroLogo from './assets/education_logo/agro.jpeg';
import iti2Logo from './assets/education_logo/iti.png';
import iti3Logo from './assets/education_logo/iti - Copy.png';

// Project Section Logo's
import LivanaLogo from './assets/work_logo/livana.jpg';
import ecoLogo from './assets/work_logo/ecoland.jpg';
import furLogo from './assets/work_logo/furniture.png';
import cafeeLogo from './assets/work_logo/cafee.png';
import realLogo from './assets/work_logo/real.png';
// import cmLogo from './assets/work_logo/cm.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MVC', logo: mvcLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Sql Server', logo:sqlLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: '.Net', logo: netLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },      
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: khamsatLogo,
      role: " Frontend Developer" ,
      company: "khamsat.com",
      date: "April 2024 - Present",
      desc: "I have hands-on experience working directly with clients, understanding their needs, and delivering tailored solutions. I also gained practical exposure as a freelancer on online platforms, where I successfully completed projects and collaborated effectively with clients to achieve their goals.",
      skills: [
        "HTML",
        "CSS",
    "JavaScript",
    "BootStrap"
      ],
    },
    {
      id: 1,
      img: itiLogo,
      role: "Fullstack Developer",
      company: "The Information Technology Institute (ITI)",
      date: "June 2025 - AUG 2025",
      desc: "Worked on my ITI graduation project 'Livana', a real estate web application. I developed the front-end using Angular and collaborated on the back-end with Web API to build a complete and functional system.",
      skills: [
        "Angular 19",
        "TypeScript",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "SQL server",
        "Asp .net web api",
      ],
    },
   
  ];
  
  export const education = [
   
    {
      id: 2,
      img: iti2Logo,
      school: "The Information Technology Institute (ITI)",
      date: "Mar 2025 - Aug 2025",
      grade: "Completed",
      desc: "Completed intensive training covering front-end (HTML, CSS, JavaScript, Angular) and back-end (C#, ASP.NET Core, Entity Framework, SQL Server) development, with hands-on projects applying OOP, design patterns, and modern web practices.",
      degree: "  Full Stack .net Development (Intensive Code Camp 5-Month Program)",
    },
    {
      id: 3,
      img: iti3Logo,
      school: "The Information Technology Institute (ITI)",
      date: "Nov 2024 - March 2025",
      grade: "Completed",
      desc: "Completed a foundation program covering programming basics, problem-solving, databases, OOP, and web development essentials, building a strong base for advanced full-stack training.",
      degree: " Software Development Fundamental (Intensive Code Camp 4-Month Program)",
    }, {
      id: 0,
      img: agroLogo,
      school: "Faculty of Agriculture Department (Land & Soil) ",
      date: "Sep 2019 - June 2023",
      grade: "2.8 GPA",
      desc: "Bachelor’s degree in Agriculture from Damanhour University, where I studied GIS and developed a strong interest in smart agriculture. I connected my knowledge in agriculture with programming to explore technology-driven solutions for modern farming.",
      degree: "Bachelor of Agriculture, Damanhour University",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Livana (Real EState Management Platform )",
      description:
        "eveloped Livana, a real estate web platform that allows users to browse, search, and manage property listings. The project was built with Angular for the front-end, .NET Web API for the back-end, and SQL Server for the database, ensuring a responsive UI and secure, efficient data handling.",
      image: LivanaLogo,
      tags: ["HTML", "CSS", "bootstrap","TypeScript", "Angular 19", " Asp .net Web API"],
      github: "https://github.com/NahlaMohammed32/-ITI-GraduationProject",
      webapp: "",
    },
    {
      id: 1,
      title: " Ecoland-Farm Products Management System (MVC)",
      description:
        "Developed a Farm Products Management System using MVC to manage and sell fresh vegetables, fruits, and herbs with features like categorization, search, cart, and inventory management.",
      image: ecoLogo,
      tags: ["Asp.net MVC", "Sql Server", "Bootstrap", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NahlaMohammed32/mvcproject",
      webapp: "",
    },
    {
      id: 2,
      title: "Furniture",
      description:
      "Created a responsive furniture landing page using HTML, CSS, and JavaScript to showcase modern designs, highlight featured products, and provide a smooth user experience with interactive elements.",
      image: furLogo,
      tags: [  "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NahlaMohammed32/Furniture",
      webapp: "https://nahlamohammed32.github.io/Furniture/",
    },
    {
      id: 3,
      title: "Real estate (Landing page)",
      description:
        "Developed a responsive real estate landing page using HTML, CSS, JavaScript, and Bootstrap to showcase property ads with a modern design and user-friendly layout.",
      image: realLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NahlaMohammed32/Real-state",
      webapp: "https://nahlamohammed32.github.io/Real-state/",
    },
    {
      id: 4,
      title: "Roaa Cafee",
      description:
       "Designed a coffee products landing page using HTML, CSS, and JavaScript to showcase different coffee items with an attractive layout and smooth user experience.",
        image: cafeeLogo,
       tags: ["HTML", "CSS"],
      github: "https://github.com/NahlaMohammed32/Roaa",
      webapp: "https://nahlamohammed32.github.io/Roaa/",
    },
   
  ];  