import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const Expertise: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="expertise" className="py-20 bg-slate-900 text-white relative overflow-hidden" dir={dir}>
        {/* Decorative elements */}
        <div className={`absolute top-0 ${dir === 'ltr' ? 'right-0 -mr-32' : 'left-0 -ml-32'} w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mt-32`}></div>
        <div className={`absolute bottom-0 ${dir === 'ltr' ? 'left-0 -ml-32' : 'right-0 -mr-32'} w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mb-32`}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold-400 font-bold uppercase tracking-wide text-sm mb-2">{t.expertise.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t.expertise.title}
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg max-w-2xl mx-auto">
              {t.expertise.description}
            </p>
          </div>
            
          <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-5 p-8 bg-slate-800/30 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors">
                  <div className="w-1.5 bg-gold-500 rounded-full h-auto min-h-[60px] flex-shrink-0"></div>
                  <div>
                      <h4 className="text-xl font-bold text-white mb-3">{t.expertise.precision.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{t.expertise.precision.desc}</p>
                  </div>
              </div>
              <div className="flex gap-5 p-8 bg-slate-800/30 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors">
                  <div className="w-1.5 bg-gold-500 rounded-full h-auto min-h-[60px] flex-shrink-0"></div>
                  <div>
                      <h4 className="text-xl font-bold text-white mb-3">{t.expertise.delivery.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{t.expertise.delivery.desc}</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
