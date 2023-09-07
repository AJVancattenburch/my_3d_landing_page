import {
  webArt,
  reactLogo,
  threejs,
  fullStack,
  javascript,
  html,
  css,
  nextjs,
  reactjs,
  vuejs,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  figma,
  aspnet,
  csharp,
  mysql,
  bootstrap,
  meta,
  codeworks,
  wildlearner,
  grasshopper,
  usMirror,
  intermountain,
  
  cpuniverse,
  gamePursuit,
  threaditAI,
  threejsPlanet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Artist",
    icon: webArt,
  },
  {
    title: "Full Stack Developer",
    icon: fullStack,
  },
  {
    title: "React Developer",
    icon: reactLogo,
  },
  {
    title: "Three JS Developer",
    icon: threejsPlanet,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "ASP.NET",
    icon: aspnet,
  },
  {
    name: "mySQL",
    icon: mysql,
  },
  {
    name: "C#",
    icon: csharp,
  },
];

const education = [
  {
    title: "Full Stack Software Development",
    school_name: "CodeWorks",
    icon: codeworks,
    iconBg: "#383E56",
    date: "March 2023 - July 2023",
    points: [
      "Completed rigorous Full-Stack course that utilizes the latest industry standards in Software Development.",
      "Exposure to 1000+ hours of additional hands-on coding experience.",
      "Developed a robust foundation in software development through immersive projects, collaborative coding challenges, and in-depth coursework, fostering the ability to tackle complex coding tasks effectively and collaboratively.",
      "Worked in professional environments centered on real-world industry experience and creative problem solving.",
      "Voted Idaho's #1 Specialty School."
    ],
  },
  {
    title: "Earned Certifications",
    school_name: "Wild Learner",
    icon: wildlearner,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - June 2023",
    wlPointHTML: "Intro to HTML5",
    wlPointCSS: "Intro to CSS3",
    wlPointJS: "Intro to JS",
    wlPointAdvJS: "Advanced JS",
    wlPointReact: "Intro to React",
    wlPointVue: "Intro to Vue",
    wlPointNode: "Intro to Node.js",
    wlPointExpress: "Intro to Express",
  },
  {
    title: "Earned Certifications",
    school_name: "Grasshopper",
    icon: grasshopper,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "JAVASCRIPT - Fundamentals, Fundamentals II, Array Methods, Animations I, Animations II",
    ],
  },
];

const experiences = [
  {
    title: "Glazier",
    company_name: "US Mirror & Glass",
    icon: usMirror,
    iconBg: "#383E56",
    date: "Apr 2021 - Jan 2023",
    points: [
      "PROBLEM-SOLVING - Constantly analyzed complex situations to find creative solutions.",
      "TEAM COLLABORATION - Experience working collaboratively with a team that delivers results. As well as with outside sources like Project Coordinators, Designers, and Clients in the glazing industry.",
      "ATTENTION TO DETAIL - I have an inexplicable meticulousness in ensuring precise measurements, cuts, and installations that I adhered to consistently and carried with me throughout my career.",
    ],
  },
  {
    title: "Sales / Route Manager",
    company_name: "Intermountain Auto Glass",
    icon: intermountain,
    iconBg: "#E6DEDD",
    date: "June 2016 - Dec 2020",
    points: [
      "TEAM LEADERSHIP - I was responsible for managing a team of 5-10 employees. I was in charge of scheduling and ensuring that all employees were performing at a high level.",
      "TEAM COLLABORATION - I worked closely with staff to ensure mental health and wellness.",
      "PARTNERSHIP DEVELOPMENT - Developed and maintained relationships with our partners. Responsible for ensuring that all partners were satisfied with their experience.",
      "INVENTORY MANAGEMENT - Oversaw inventory for the office and shop, ensuring timely access to essential resources, demonstrating keen organizational skills.",
      "TRANSFERRABLE SKILLS - These experiences contributed to my ability problem-solve, communicate effectively, and work collaboratively with others."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      `AJ’s expertise in UI - especially 3D web animations really sets him apart. He has a natural talent for creating immersive & interactive 3D elements that captivate and engage users. He helped me take a curriculum I was writing for a teen JavaScript summer camp by using his creativity to add animations, making students excited to code.`,
    newLine:
      `Beyond his technical skills, AJ is a pleasure to work with. He is a team player who, always willing to collaborate and share his knowledge with others. His passion for web development and design is contagious, and he inspires his peers to strive for excellence.`,
    name: "Jeanne Allen",
    designation: "T.A.",
    company: "CodeWorks",
    image: "https://avatars.githubusercontent.com/u/112727701?v=4",
  },
  {
    testimonial:
      "AJ is a talented web developer who is passionate about his work. He is a great communicator and always goes above and beyond to ensure that his clients are satisfied. I've never met a web developer who truly cares about their clients' success like AJ does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After AJ optimized our website, our traffic increased by 50%. We can't thank him enough! He's a pleasure to work with and we look forward to working with him again in the future.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CPUniverse",
    description:
      "'CPUniverse' is a cutting-edge metaverse mock platform that offers users the opportunity to explore a vast digital universe comprised of interconnected realms and virtual worlds.  The application is built as a design template to allows users to explore and/or various virtual worlds and invite others to join them once further functionality is implemented.",
      tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "violet-text-gradient",
      },
    ],
    image: cpuniverse,
    source_code_link: "https://github.com/AJVancattenburch/CPUniverse",
  },
  {
    name: "Game Pursuit",
    description:
      "Fueled by a diverse set of skills and experiences, our team harnessed the power of Vue.js, Node.js, Express, and much more to architect a user-friendly hub for gamers to register, collect badges/sponsorships, flaunt their prowess, and initiate exhilarating tournaments that revolves around a token-based rewards system that incentivizes users to play more and earn more.",
    tags: [
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "violet-text-gradient",
      },
      {
        name: "postman",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: gamePursuit,
    source_code_link: "https://github.com/ChanthaKammer/capstone",
  },
  {
    name: "ThreadIt AI",
    description:
      "ThreadIt is a cutting-edge platform that allows users to upload images of clothing items and receive recommendations for other items that pair well with their selection.  The application is built using a React front-end and a Node.js/Express.js back-end that utilizes three.js to render realistic 3D models, and the OpenAI API to generate recommendations based on the user's input.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "violet-text-gradient",
      },
      {
        name: "openaiapi",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      }
    ],
    image: threaditAI,
    source_code_link: "https://github.com/AJVancattenburch/ThreadItAI",
  },
];

export { services, technologies, education, experiences, testimonials, projects };