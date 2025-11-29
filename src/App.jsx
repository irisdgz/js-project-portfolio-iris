import React from 'react';
import { GlobalStyle } from './GlobalStyles'; 

// Import Components
import HeroSection from './components/HeroSection';
import TechSection from './components/TechSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ArticlesSection from './components/ArticlesSection'; 

// Import Data
import { userData, techSkills, projects, skillsCategories, articles } from './data/portfolioData';

function App() {
  return (
    <>
      <GlobalStyle /> 
      
      <HeroSection user={userData} />
      <TechSection tech={techSkills} />
      <ProjectsSection list={projects} />
      <ArticlesSection articles={articles} /> 
      <SkillsSection categories={skillsCategories} />
      <Footer user={userData} />
    
    </>
  );
}

export default App;