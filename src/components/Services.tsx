import React from 'react';
import { Wrench, Zap, Droplets, Home, Settings, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const Services: React.FC = () => {
  const { t, dir } = useLanguage();

  const servicesList = [
    {
      id: '1',
      title: t.services.items.electrical.title,
      description: t.services.items.electrical.desc,
      icon: Zap
    },
    {
      id: '2',
      title: t.services.items.plumbing.title,
      description: t.services.items.plumbing.desc,
      icon: Droplets
    },
    {
      id: '3',
      title: t.services.items.maintenance.title,
      description: t.services.items.maintenance.desc,
      icon: Wrench
    },
    {
      id: '4',
      title: t.services.items.smartHome.title,
      description: t.services.items.smartHome.desc,
      icon: Home
    },
    {
      id: '5',
      title: t.services.items.hvac.title,
      description: t.services.items.hvac.desc,
      icon: Settings
    },
    {
      id: '6',
      title: t.services.items.safety.title,
      description: t.services.items.safety.desc,
      icon: ShieldCheck
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-500 font-bold uppercase tracking-wide text-sm mb-2">{t.services.subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.services.title}
          </h3>
          <p className="text-slate-600">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-gold-400 group"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-400 transition-colors">
                <service.icon className="text-slate-700 group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};