import React from 'react';

// Vi importerar komponenterna från mappen vi skapade
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';

// Vi importerar datan från data-mappen
import { userData, projects } from './data/portfolioData';

export default function App() {
  return (
    <div className="font-sans text-slate-900">
      
      {/* Vi skickar datan till komponenterna */}
      <HeroSection user={userData} />
      <ProjectsSection list={projects} />
      
      <footer className="bg-black text-white py-12 text-center">
        <p>&copy; 2025 {userData.name}</p>
      </footer>
    </div>
  );
}