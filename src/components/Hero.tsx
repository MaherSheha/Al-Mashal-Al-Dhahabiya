import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" dir={dir}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white mt-16">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 border border-gold-400/50 rounded-full bg-gold-400/10 text-gold-400 font-semibold text-sm uppercase tracking-wider">
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
             Al-Mashal Al-Dhahabiya <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
              {t.hero.titleSuffix}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-slate-900 font-bold rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
            >
              {t.hero.ctaQuote}
              {dir === 'ltr' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center"
            >
              {t.hero.ctaServices}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};