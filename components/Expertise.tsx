import React from 'react';
import { Users, Award, Clock, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Expertise: React.FC = () => {
  const { t, dir } = useLanguage();

  const stats = [
    { id: '1', value: '10+', label: t.expertise.stats.years, icon: Clock },
    { id: '2', value: '500+', label: t.expertise.stats.projects, icon: Building2 },
    { id: '3', value: '50+', label: t.expertise.stats.engineers, icon: Users },
    { id: '4', value: '100%', label: t.expertise.stats.satisfaction, icon: Award },
  ];

  return (
    <section id="expertise" className="py-20 bg-slate-900 text-white relative overflow-hidden" dir={dir}>
        {/* Decorative elements */}
        <div className={`absolute top-0 ${dir === 'ltr' ? 'right-0 -mr-32' : 'left-0 -ml-32'} w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mt-32`}></div>
        <div className={`absolute bottom-0 ${dir === 'ltr' ? 'left-0 -ml-32' : 'right-0 -mr-32'} w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mb-32`}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-gold-400 font-bold uppercase tracking-wide text-sm mb-2">{t.expertise.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t.expertise.title}
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-lg">
              {t.expertise.description}
            </p>
            
            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-1 bg-gold-500 rounded-full"></div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-1">{t.expertise.precision.title}</h4>
                        <p className="text-slate-400">{t.expertise.precision.desc}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-1 bg-gold-500 rounded-full"></div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-1">{t.expertise.delivery.title}</h4>
                        <p className="text-slate-400">{t.expertise.delivery.desc}</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:border-gold-500/50 transition-colors">
                  <stat.icon className="mx-auto text-gold-400 mb-4" size={32} />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};