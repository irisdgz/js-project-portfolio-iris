// src/data/portfolioData.js

export const userData = {
  name: "Iris de Gracia Zhang",
  role: "Creative Frontend Developer",
  intro: "Creative Frontend Developer with a background in Human Resources and Public Affairs.", 
  subIntro: "bringing a strong background in communication and organization to the tech world. I build bridges between design and code with a focus on user experience.",
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
    skills: ["JavaScript ES6", "React", "HTML5", "CSS3", "Styled Components", "Node.js", "TypeScript"]
  },
  {
    title: "Toolbox",
    skills: ["Figma", "VS Code", "Git & GitHub", "Slack & Zoom", "Netlify"]
  },
  {
    title: "Upcoming Skills",
    skills: ["Agile", "Design Lead", "Branding", "Strategy"]
  }
];


export const articles = [
  {
    id: 1,
    title: "How to stop being scared: Learning to love code",
    description: "The first step is understanding that code is just a tool to solve problems.",
    date: "June 2023",
    // You can use a placeholder image from the internet, or put one in your public folder
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com" // You can add your actual blog link here later
  }
];