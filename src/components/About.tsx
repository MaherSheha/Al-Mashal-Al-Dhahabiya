import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Electrician at work"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <p className="text-white font-medium text-lg">{t.about.quote}</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-gold-500 font-bold uppercase tracking-wide text-sm mb-2">{t.about.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t.about.title}
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {t.about.p3}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold-500 flex-shrink-0" size={20} />
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};