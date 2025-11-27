// src/data/portfolioData.js

export const userData = {
  name: "Iris de Gracia Zhang",
  role: "Creative Frontend Developer",
  intro: "Creative Frontend Developer with a background in Human Resources and Public Affairs.", // Fixed typo "Hurman"
  subIntro: "Frontend Developer bringing a strong background in communication and organization to the tech world. I build bridges between design and code with a focus on user experience.",
  email: "iris.dgz@icloud.com",
  phone: "+46(0)73 707 26 56",
  profileImage: "/Alice.jpg", 
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    stackoverflow: "https://stackoverflow.com/"
  }
};

export const techSkills = [
  "HTML", "CSS", "JavaScript", "React", "Styled Components", "GitHub", "Accessibility", "UX/UI"
];

export const projects = [
  {
    id: 1,
    title: "Recipe App",
    description: "Interactive recipe app with real-time search, category filtering, and nutritional data integration via external API. Built from a set design.",
    tags: ["HTML5", "CSS", "JavaScript"],
    github: "https://github.com/irisdgz/js-project-recipe-library",
    netlify: "https://mysecondprojectlibrary.netlify.app/",
    image: "/recipe-app.png" 
  },
  {
    id: 2,
    title: "Weather App",
    description: "TypeScript-based weather app fetching real-time data for European capitals. Built with dynamic sorting.",
    tags: ["HTML5", "CSS", "JavaScript", "TypeScript"], 
    github: "https://github.com/qabalany/js-project-weather-app",
    netlify: "https://amazing-monstera-973740.netlify.app/",
    image: "/weather-app.png" 
  },
];

export const skillsCategories = [
  {
    title: "Code",
    skills: ["JavaScript ES6", "React", "HTML5", "CSS3", "Styled Components"]
  },
  {
    title: "Toolbox",
    skills: ["Figma", "Postman", "Git & GitHub", "VS Code", "Slack"]
  },
  {
    title: "Upcoming Skills",
    skills: ["Agile", "Design Lead", "Branding", "Strategy"]
  }
];