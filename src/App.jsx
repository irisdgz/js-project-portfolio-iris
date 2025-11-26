import React from 'react';
import { Github, Globe, Linkedin, Mail, ArrowRight } from 'lucide-react';

// =============================================================================
// 🔧 CONFIGURATION AREA - EDIT YOUR DETAILS HERE
// =============================================================================

const userData = {
  // Change this to your name
  name: "Your Name",

  // Your job title (e.g. Frontend Developer, UX Designer)
  role: "Frontend Developer",

  // A short bio about yourself
  intro: "I am a creative developer who loves combining design with clean code. Currently studying to become a frontend expert.",

  // Your email address
  email: "email@example.com",

  // Your profile picture (Use a URL or import a local image)
  profileImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",

  // Social Media Links (Leave empty "" if you don't use one)
  socials: {
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    stackoverflow: ""
  }
};

// List your skills here
const techSkills = [
  "HTML", "CSS", "JavaScript", "React", "Figma", "GitHub", "Accessibility", "UX/UI"
];

// Add your projects here
const projects = [
  {
    id: 1,
    title: "Project Name 1",
    description: "Describe your first project here. What did you build? What problem did it solve?",
    tags: ["React", "API", "CSS"], // Tech stack used
    github: "https://github.com", // Link to code
    netlify: "https://netlify.com", // Link to live demo
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Project Name 2",
    description: "Describe your second project. Maybe something about E-commerce or a Todo app?",
    tags: ["HTML", "JavaScript"],
    github: "https://github.com",
    netlify: "https://netlify.com",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  // Copy-paste the block above to add more projects...
];

// Add your articles or thoughts here
const articles = [
  {
    id: 1,
    title: "My First Article",
    date: "OCT 2023",
    description: "A short preview of what you wrote about...",
    image: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Learning React",
    date: "SEP 2023",
    description: "Thoughts on learning components and props...",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    link: "#"
  }
];

// =============================================================================
// ⛔️ END OF CONFIGURATION - NO NEED TO EDIT BELOW THIS LINE
// =============================================================================

// --- UI COMPONENTS ---

const Container = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-6 md:px-12 ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ title }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900 tracking-tight">
    {title}
  </h2>
);

const Button = ({ href, secondary, children }) => {
  const baseStyle = "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1";
  const primaryStyle = "bg-slate-900 text-white hover:bg-slate-700";
  const secondaryStyle = "bg-slate-200 text-slate-800 hover:bg-slate-300";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyle} ${secondary ? secondaryStyle : primaryStyle}`}>
      {children}
    </a>
  );
};

const Tag = ({ text }) => (
  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-1 rounded">
    {text}
  </span>
);

// --- SECTIONS ---

const Hero = () => (
  <header className="py-20 md:py-32 text-center bg-white">
    <Container className="flex flex-col items-center">
      <div className="mb-8 relative">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src={userData.profileImage}
            alt={`Profile of ${userData.name}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h3 className="text-slate-500 font-bold uppercase tracking-widest mb-2 text-sm md:text-base">
        Portfolio
      </h3>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
        {userData.name}
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
        {userData.intro}
      </h2>

      <div className="mt-10 flex gap-6 text-slate-400 hover:text-slate-600 transition-colors">
        {userData.socials.linkedin && (
          <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-slate-900 transition-colors">
            <Linkedin size={32} />
          </a>
        )}
        {userData.socials.github && (
          <a href={userData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-slate-900 transition-colors">
            <Github size={32} />
          </a>
        )}
        {userData.socials.stackoverflow && (
          <a href={userData.socials.stackoverflow} target="_blank" rel="noopener noreferrer" aria-label="StackOverflow" className="hover:text-slate-900 transition-colors">
            <Globe size={32} />
          </a>
        )}
      </div>
    </Container>
  </header>
);

const TechBanner = () => (
  <section className="bg-black text-white py-16">
    <Container className="text-center">
      <h2 className="text-3xl font-bold mb-8">Tech</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {techSkills.map((skill, index) => (
          <span key={index} className="text-lg md:text-2xl font-light text-slate-300 hover:text-white transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </Container>
  </section>
);

const ProjectRow = ({ project, isEven }) => (
  <article className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-7/12 group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-slate-200 aspect-[4/3]">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
    </div>

    <div className="w-full md:w-5/12 space-y-6 text-center md:text-left">
      <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        {project.github && (
          <Button href={project.github} secondary>
            <Github size={18} /> View Code
          </Button>
        )}
        {project.netlify && (
          <Button href={project.netlify}>
            <Globe size={18} /> Live Demo
          </Button>
        )}
      </div>
    </div>
  </article>
);

const ArticleCard = ({ article }) => (
  <article className="group cursor-pointer flex flex-col h-full">
    <div className="overflow-hidden rounded-lg mb-4 aspect-[3/2]">
      <img
        src={article.image}
        alt=""
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <time className="text-xs font-bold text-slate-400 mb-2 block uppercase tracking-widest">{article.date}</time>
    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:underline decoration-2 underline-offset-4">{article.title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
      {article.description}
    </p>
    <div className="text-indigo-600 font-bold text-sm flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
      Read Article <ArrowRight size={14} />
    </div>
  </article>
);

export const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-yellow-200 selection:text-black">
      <Hero />
      <TechBanner />

      <section className="py-24 bg-slate-50">
        <Container>
          <SectionHeading title="Featured Projects" />
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                isEven={index % 2 !== 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <SectionHeading title="My Words" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <footer className="bg-black text-white py-24 text-center">
        <Container>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Talk</h2>
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-4">
              <img src={userData.profileImage} alt="Profile" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="space-y-2 text-slate-300 text-lg">
              <p>{userData.name}</p>
              <p>{userData.role}</p>
            </div>
            <a
              href={`mailto:${userData.email}`}
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-slate-300 transition-colors border-b-2 border-transparent hover:border-white pb-1"
            >
              <Mail size={28} />
              {userData.email}
            </a>
          </div>
          <div className="flex justify-center gap-8 text-slate-400">
            {userData.socials.linkedin && (
              <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            )}
            {userData.socials.github && (
              <a href={userData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={24} />
              </a>
            )}
            {userData.socials.stackoverflow && (
              <a href={userData.socials.stackoverflow} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Globe size={24} />
              </a>
            )}
          </div>
          <p className="mt-16 text-slate-600 text-sm">
            &copy; 2025 {userData.name} · Portfolio V2
          </p>
        </Container>
      </footer>
    </div>
  );
}