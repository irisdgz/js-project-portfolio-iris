import React from 'react';
import { Github, Globe } from 'lucide-react';

export default function ProjectsSection({ list }) {
  // SÄKERHETSSPÄRR: Om listan är tom eller saknas, visa ingenting (eller en laddar-text)
  if (!list || list.length === 0) {
    return (
      <section className="py-24 bg-slate-50 text-center text-slate-500">
        <p>No projects loaded yet...</p>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="flex flex-col gap-24">
          {list.map((project, index) => (
            <article key={project.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Bild */}
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-slate-600 text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs font-bold uppercase">{tag}</span>
                  ))}
                </div>

                <div className="pt-4 flex gap-4 justify-center md:justify-start">
                   <a href={project.github} className="flex gap-2 items-center bg-slate-200 px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-slate-300">
                     <Github size={18} /> Code
                   </a>
                   <a href={project.netlify} className="flex gap-2 items-center bg-black text-white px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-slate-800">
                     <Globe size={18} /> Live
                   </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}