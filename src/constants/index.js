import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fokify,
  football,
  moonmusic,
  bootstrap,
  nextjs,
  cap3,
  daihoc,
  frontend,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Long An Specialized High School",
    company_name: "High School",
    icon: cap3,
    iconBg: "#fff",
    date: "August 2017 - August 2020",
    points: [
      "Long An Specialized High School is a prestigious institution in the southwestern region of Vietnam.",
      "Class T2K17 is a Mathematics major program with a focus on researching and developing mathematical abilities.",
      "Students in T2K17 have outstanding academic achievements, contributing to the reputation and prestige of the school.",
      "I am an excellent student in T2K17 with a vision and aspiration to become a future leader of society.",
    ],
  },
  {
    title: "University of Science",
    company_name: "University",
    icon: daihoc,
    iconBg: "#fff",
    date: "Oct 2021 - Oct 2024",
    points: [
      "University of Science is a prestigious university in Vietnam. ",
      "I am studying Software Engineering at the university and aspire to become an excellent software developer.",
      " I have participated in a volunteer club to improve my soft skills and contribute to the community.",
      " The university provides students with knowledge, skills, and capabilities to develop themselves and contribute to society.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Job",
    icon: frontend,
    iconBg: "#fff",
    date: "Feb 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Moon Music",
    description:
      "The website offers a range of user-friendly features, including a search function, exploration of over 1000 songs+ by genres,discovery of top 100 artists, locating songs around you, and detailed artist and song information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moonmusic,
    source_code_link: "https://github.com/tanvhla258/MoonMusic",
  },
  {
    name: "Premier League",
    description:
      "Providing a user-friendly interface for managing player, club, and match data, as well as displaying top scorer and standing information. With 20 teams in the league and over 500 players, the website provides a user-friendly interface for managing league data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: football,
    source_code_link: "https://github.com/tanvhla258/Premier-League-management",
  },
  {
    name: "Fokify",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fokify,
    source_code_link: "https://github.com/tanvhla258/Fokify-udemy",
  },
];

export { services, technologies, experiences, testimonials, projects };
