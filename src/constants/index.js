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
 madina,
  asoka,
  britsh,
  edusity,
  fect,
    anime,
  move,
  akurana,
  fooddei,
  foodback ,
phamacy ,
 Blog,
  plastic,
  food,
  comm,
 agre,
  tesla,
  shopify,
  carrent,
  jobit,
 icbt,
  tripguide,
  threejs,

    php,

  wordpress,
  java,
  mySqli,
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
    { id: "download", 
      title: "Download CV", 
      download_link: "https://drive.google.com/file/d/1V6TlpoXofDomG9W7heppAeyGg68JvB6W/view?usp=sharing"
     },
  

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
 
  
   {
    title: "React Native Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "php",
    icon: php,
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
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: wordpress,
  },
  {
    name: "mySqli",
    icon: mySqli,
  },
];

const experiences = [

  {
    title: "Web Developer Intern",
    company_name: " Federation for Environment, Climate and Technology (FECT)",
    icon: fect,
    iconBg: "#E6DEDD",
    date: "july 01 2024 - January 20 2025",
    points: [
      "Contributed to the development and maintenance of the EEA Website. (https://eaa.awwa.lk/)",
      "Assisted in the Flood Alert System project, supporting both frontend and backend tasks.",
      "Provided server-side support, including server setup and handling technical service requests.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Assisted with instrumentation tasks such as equipment installation, calibration, and troubleshooting.",
      "Collaborated with developers to implement features, fix bugs, and optimize performance across web applications.",
    ],
  },

];

const educations = [
  {
   title: "🎓 Bachelor’s Degree in Software Engineering",
    company_name: "ICBT Kandy Campus",
    icon: icbt,
    iconBg: "#E6DEDD",
    date: "2024 – 2025",
    points: [
      "Successfully completed the final year of the Software Engineering degree program.",
 
    ],
  },

    {
   title: "🎓Higher Diploma in Computing and Software Engineering",
    company_name: "ICBT Kandy Campus",
    icon: icbt,
    iconBg: "#E6DEDD",
    date: "2022 – 2024",
    points: [
      "Studied at ICBT Kandy Campus and successfully completed the Higher Diploma in Computing and Software Engineering (2022 – 2024) as part of the Bachelor's Degree pathway.",
 
    ],
  },
    {
   title: "🎓 GCE Advanced Level (A/L) – Commerce Stream",
    company_name: "K/Madina National School, Madawala Bazaar",
    icon: madina,
    iconBg: "#E6DEDD",
    date: "2019 – 2021",
    points: [
      "I studied Commerce subjects at school during my A/L period.",
 
    ],
  },


 {
   title: "🎓 GCE Ordinary Level (O/L)",
    company_name: "Asoka Vidyalaya, Kandy ",
    icon: asoka,
    iconBg: "#E6DEDD",
    date: "Completed: 2018",
    points: [
      "Successfully completed the national O/L examination.",
 
    ],
  },
   {
   title: "Diploma in English",
    company_name: "British College, Kandy  ",
    icon: britsh,
    iconBg: "#E6DEDD",
    date: "Completed: 2018",
    points: [
      "Completed English language and communication diploma program..",
 
    ],
  },


];

const projects = [
  {
    name: " Edusity Education Website ",
    description:
      "Edusity is a modern, responsive educational landing page showcasing courses, expert tutors, and flexible learning tools with a clean UI to promote smarter, faster online learning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:edusity,
    source_code_link: "https://github.com/NOORDEEN4908/EDUSITY.git",
  },
  {
    name: "Netflix Clone",
    description:
      "A responsive Netflix-inspired clone using TMDB API to display trending movies, featuring a sleek UI with banners, thumbnails, and smooth navigation for UI/API integration practice.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fierbase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: move,
    source_code_link: "https://github.com/NOORDEEN4908/netflix-clone.git",
  },
  {
    name: "TastyBite – Online Restaurant ",
    description:
      "A responsive online restaurant website where users can browse menus, place orders, and request delivery. Features include user authentication, order tracking, and a smooth, modern UI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
       {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fooddei,
    source_code_link: "https://github.com/NOORDEEN4908/tomato-resturent.git",
  },

  {
    name: "Akurana Flood Alert System",
    description:
      "A web-based flood alert system for Akurana using real-time weather data, rainfall monitoring, and alerts to help residents stay safe during heavy rain conditions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
        {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: akurana,
    source_code_link: "https://github.com/NOORDEEN4908/Akurana-flood-alert.git",
  },

   {
    name: "AnimeVerse – Your Ultimate Anime Hub",
    description:
      "A responsive anime website showcasing popular series, trailers, and episodes with smooth navigation, designed using reusable components for efficient, dynamic content display and user engagement.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "fierbase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: anime,
    source_code_link: "https://github.com/NOORDEEN4908/Anime-website.git",
  },


 {
    name: " HealthPlus Pharmacy Website",
    description:
      "A responsive pharmacy site where users can browse products and securely upload prescriptions for quick, convenient ordering and delivery of medicines and health supplies.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "phpmyadmin",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
         {
        name: "bootstrap",
        color: "pink-text-gradient",
      },

    ],
    image: phamacy,
    source_code_link: "https://github.com/",
  },


 {
    name: "AgriConnect – Interactive Agriculture Support",
    description:
      "A responsive agriculture website allowing users to send queries and receive expert responses, fostering knowledge sharing and support for farmers and enthusiasts alike.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
     {
        name: "phpmyadmin",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: agre,
    source_code_link: "https://github.com/NOORDEEN4908/Agriculture-website.git",
  },

 {
    name: "TableEase – Online Table Booking & Food Ordering",
    description:
      "A PHP-based responsive website enabling users to book restaurant tables and place food orders online with real-time availability, secure payments, and easy management.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
     {
        name: "phpmyadmin",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
       {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: foodback,
    source_code_link: "https://github.com/NOORDEEN4908/Pizza-restaurant.git",
  },

  {
    name: "Coworking Company – Landing Page",
    description:
      "A modern, responsive WordPress landing page for a project management company, showcasing services, client testimonials, and contact options to attract and engage potential clients.",
    tags: [
      {
        name: "WordPres",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
    
    ],
    image: plastic,
    source_code_link: "https://github.com/NOORDEEN4908/Project-Management-company-landing-page.git",
  },
  {
    name: "Multi-Restaurant Table Booking System",
    description:
      "A PHP-based website allowing users to browse multiple restaurants, select their preferred one, and book tables online with real-time availability and confirmation features..",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
    {
        name: "phpmyadmin",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
       {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/NOORDEEN4908/Resturents-Booking.git",
  },

  {
    name: "Sportify – E-commerce Website",
    description:
      "A WordPress-based eCommerce website offering a wide range of shoes and sports equipment with easy navigation, secure checkout, and responsive design for a smooth shopping experience..",
    tags: [
       {
        name: "WordPres",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
    ],
    image: comm,
    source_code_link: "https://github.com/NOORDEEN4908/Wordpress-ecommerce.git",
  },
  {
    name: "Eduvalt – Landing Page",
    description:
      "A modern, responsive WordPress landing page for Eduvalt, showcasing online courses with engaging design and clear calls-to-action to convert visitors into students effectively.",
    tags: [
       {
        name: "WordPres",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
    ],
    image: Blog,
    source_code_link: "https://github.com/NOORDEEN4908/Eduvalt-landingpage.git",
  },

];




export { services, technologies, experiences, educations, projects };
