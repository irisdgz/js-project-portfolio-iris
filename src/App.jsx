import React from 'react';
import { GlobalStyle } from './GlobalStyles'; 

// Import Components
import HeroSection from './components/HeroSection';
import TechSection from './components/TechSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';


// Import Data

import { userData, techSkills, projects, skillsCategories } from './data/portfolioData';

function App() {
  return (
    <>
      <GlobalStyle /> 
      
      <HeroSection user={userData} />
      <TechSection tech={techSkills} />
      <ProjectsSection list={projects} />
      
      {/* ❌ Removed: <ArticlesSection ... /> */}
      
      <SkillsSection categories={skillsCategories} />
      <Footer user={userData} />
    </>
  );
}

export default App;