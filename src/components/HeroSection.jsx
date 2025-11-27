import React from 'react';
import { Github, Globe, Linkedin } from 'lucide-react';

export default function HeroSection({ user }) {
  // SÄKERHETSSPÄRR: Om 'user' saknas (är undefined), visa ingenting istället för att krascha.
  if (!user) {
    return null; // Eller returnera <div>Loading...</div> om du föredrar
  }

  return (
    <header className="py-20 md:py-32 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Profilbild */}
        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
        </div>

        {/* Text */}
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Portfolio</h3>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6">{user.name}</h1>
        <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto mb-8">{user.intro}</p>

        {/* Ikoner - Vi kollar att user.socials finns innan vi renderar */}
        {user.socials && (
          <div className="flex justify-center gap-6 text-slate-400">
            {user.socials.linkedin && <a href={user.socials.linkedin}><Linkedin size={32} /></a>}
            {user.socials.github && <a href={user.socials.github}><Github size={32} /></a>}
            {user.socials.stackoverflow && <a href={user.socials.stackoverflow}><Globe size={32} /></a>}
          </div>
        )}
      </div>
    </header>
  );
}