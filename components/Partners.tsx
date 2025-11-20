import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Using placeholder logos for demonstration
const partners = [
  { id: 1, name: "BuildTech Industries", url: "https://picsum.photos/200/80?random=1" },
  { id: 2, name: "Global Construct", url: "https://picsum.photos/200/80?random=2" },
  { id: 3, name: "PowerLine Systems", url: "https://picsum.photos/200/80?random=3" },
  { id: 4, name: "AquaFlow Corp", url: "https://picsum.photos/200/80?random=4" },
  { id: 5, name: "Urban Developers", url: "https://picsum.photos/200/80?random=5" },
  { id: 6, name: "SmartCity Solutions", url: "https://picsum.photos/200/80?random=6" },
];

export const Partners: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="partners" className="py-16 bg-white border-t border-slate-100" dir={dir}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-slate-900 font-bold text-2xl mb-10">{t.partners.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="w-32 md:w-40 h-20 bg-slate-50 rounded-lg flex items-center justify-center p-4 hover:shadow-md transition-shadow opacity-60 hover:opacity-100"
              title={partner.name}
            >
             <div className="font-bold text-slate-400 text-lg italic select-none">
                {/* Simulating a logo with text if image fails or for clean look */}
                LOGO {partner.id}
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};