import { delay } from "motion";

export const frontEndSkillCards = [
  {
    id: 1,
    title: "Angular",
    url: `${process.env.PUBLIC_URL}/images/Front-end/Angular.png`,
  },
  {
    id: 2,
    title: "React",
    url: `${process.env.PUBLIC_URL}/images/Front-end/React.png`,
  },
  {
    id: 3,
    title: "HTML",
    url: `${process.env.PUBLIC_URL}/images/Front-end/HTML.png`,
  },
  {
    id: 4,
    title: "CSS",
    url: `${process.env.PUBLIC_URL}/images/Front-end/CSS.png`,
  },
  {
    id: 5,
    title: "JavaScript",
    url: `${process.env.PUBLIC_URL}/images/Front-end/javascript.png`,
  },
  {
    id: 6,
    title: "TypeScript",
    url: `${process.env.PUBLIC_URL}/images/Front-end/TypeScript.png`,
  },
  {
    id: 7,
    title: "SpreadJs",
    url: `${process.env.PUBLIC_URL}/images/Front-end/spreadjs.jpg`,
  },
  {
    id: 8,
    title: "Sass",
    url: `${process.env.PUBLIC_URL}/images/Front-end/sass.png`,
  },
];

export const backendSkillsCards = [
  {
    id: 1,
    title: "NodeJs",
    url: `${process.env.PUBLIC_URL}/images/Back-end/nodejs.png`,
  },
  {
    id: 2,
    title: "Express",
    url: `${process.env.PUBLIC_URL}/images/Back-end/express.png`,
  },
  {
    id: 3,
    title: "PostgreSQL",
    url: `${process.env.PUBLIC_URL}/images/Back-end/postgresql.png`,
  },
  {
    id: 4,
    title: "Cassandra",
    url: `${process.env.PUBLIC_URL}/images/Back-end/cassandra.png`,
  },
];

export const otherSkills = [
  {
    id: 1,
    title: "Git",
    url: `${process.env.PUBLIC_URL}/images/Others/Git.png`,
  },
  {
    id: 2,
    title: "Jira",
    url: `${process.env.PUBLIC_URL}/images/Others/jira.png`,
  },
  {
    id: 3,
    title: "AzureDevOps",
    url: `${process.env.PUBLIC_URL}/images/Others/azure.png`,
  },
  {
    id: 4,
    title: "RabbitMQ",
    url: `${process.env.PUBLIC_URL}/images/Others/rabbitmq.png`,
  },
  {
    id: 5,
    title: "Ubuntu",
    url: `${process.env.PUBLIC_URL}/images/Others/Ubuntu.png`,
  },
  {
    id: 5,
    title: "Confluence",
    url: `${process.env.PUBLIC_URL}/images/Others/confluence.png`,
  },
  {
    id: 5,
    title: "Agile",
    url: `${process.env.PUBLIC_URL}/images/Others/agile.png`,
  },
  {
    id: 5,
    title: "Postman",
    url: `${process.env.PUBLIC_URL}/images/Others/postman.png`,
  },
];

export const projects1 = [
  {
    id: 1,
    project: "Hydra : Access Management & Security Tool",
    responsibilities: [
      "Successfully developed a product from scratch using React.",
      "Implemented real-time data updates using WebSocket.",
      "Improved application security by integrating advanced authentication mechanisms.",
      "Collaborated with the QA team to ensure high product quality.",
    ],
  },
  {
    id: 2,
    project: "Street Light Management System",
    responsibilities: [
      "Worked as a full-stack developer, integrating front-end and back-end systems.",
      "Built a user-friendly dashboard for real-time monitoring and control of street lights.",
      "Reduced system downtime by implementing efficient error-handling mechanisms.",
      "Ensured data integrity using a distributed database system with Cassandra.",
    ],
  },
];

export const projects2 = [
  {
    id: 3,
    project: "Limbach: Project Versioning & Estimation System",
    responsibilities: [
      "Transitioned from React to Angular and quickly mastered the framework.",
      "Implemented complex data manipulations and visualizations using SpreadJS.",
      "Wrote and maintained unit tests using Jest.",
      "Created locking mechanisms for shared spreadsheets to prevent data corruption.",
      "Reduced bug resolution time by integrating effective debugging tools.",
    ],
  },
  {
    id: 4,
    project: "Darisni: EdTech Platform",
    responsibilities: [
      "Integrated RESTful APIs and implemented responsive web design.",
      "Worked with React and TypeScript for frontend development.",
      "Collaborated with the team using Jira and Bitbucket for task management and version control.",
    ],
  },
];

export const projects3 = [
  {
    id: 5,
    project: "Top Bank in US",
    responsibilities: [
      "Developed secure banking features using React and TypeScript.",
      "Integrated third-party payment gateways and ensured compliance with industry standards.",
      "Optimized the performance of critical financial dashboards.",
      "Collaborated with cross-functional teams to design and implement user-friendly interfaces.",
      "Ensured application scalability by implementing microservices architecture.",
    ],
  },
];

// Jiggle animations

export const jiggleVariants = {
  animate: {
    rotate: [0, -3, 3, -3, 3, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

// Smooth oscillation using sin wave
export const oscillateVariants = {
  animate: {
    x: [0, 10, 0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Floating effect
export const getRandomfloatingVariant = () => {
  return {
    animate: {
      y: [-5, 5],
      x: [-5, 5],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: Math.random() * 4
      },
    },
  }
}
export const floatingVariants = {
  animate: {
    y: [-5, 5],
    x: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: Math.random() * 2
    },
  },
};

// Wobble effect
export const wobbleVariants = {
  animate: {
    rotate: [0, -5, 5, -5, 5, 0],
    scale: [1, 1.05, 0.95, 1.05, 0.95, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

export const getTextRevealVariantUp = () => {
  return {
    animate: {
      y: [-150, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        ease: "easeInOut",
      },
    },
  }
}

export const getTextRevealVariantDown = () => {
  return {
    animate: {
      y: [-150, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }
}

export const navItems = [
  { title: "About Me", href: "#about-me", delay: 0.5 },
  { title: "Skills", href: "#my-skills", delay: 0.7 },
  { title: "Experience", href: "#my-experience", delay: 0.9 },
  { title: "Contact Me", href: "#contact-me", delay: 1.1 }
];

export const textVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: (delay) => ({
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.8,
          delay,
          ease: "easeOut"
      }
  })
};
