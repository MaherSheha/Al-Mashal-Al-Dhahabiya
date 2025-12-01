import React from 'react';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const Footer: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full border-2 border-gold-500 text-gold-500">
                <Building2 size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-white mb-1">Al-Mashal Al-Dhahabiya</span>
                <span className="text-xs text-gold-500 font-medium">مؤسسة المشعل الذهبية</span>
              </div>
            </div>
            <p className="text-sm text-gold-400/80 italic mb-6 font-light tracking-wide">
              {t.footer.slogan}
            </p>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${dir === 'ltr' ? 'border-l-4 pl-3' : 'border-r-4 pr-3'} border-gold-500`}>
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-slate-400">
              {[t.nav.home, t.nav.about, t.nav.services, t.nav.expertise, t.nav.contact].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold-400 transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${dir === 'ltr' ? 'border-l-4 pl-3' : 'border-r-4 pr-3'} border-gold-500`}>
              {t.footer.services}
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>{t.services.items.electrical.title}</li>
              <li>{t.services.items.plumbing.title}</li>
              <li>{t.services.items.maintenance.title}</li>
              <li>{t.services.items.smartHome.title}</li>
              <li>{t.services.items.safety.title}</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${dir === 'ltr' ? 'border-l-4 pl-3' : 'border-r-4 pr-3'} border-gold-500`}>
              {t.footer.newsletter}
            </h4>
            <p className="text-slate-400 mb-4">{t.footer.subscribe}</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={dir === 'ltr' ? "Your email" : "البريد الإلكتروني"}
                className={`bg-slate-900 border border-slate-800 text-white px-4 py-2 focus:outline-none focus:border-gold-500 w-full ${dir === 'ltr' ? 'rounded-l-md' : 'rounded-r-md'}`}
              />
              <button className={`bg-gold-500 text-slate-900 px-4 py-2 font-bold hover:bg-gold-400 transition-colors ${dir === 'ltr' ? 'rounded-r-md' : 'rounded-l-md'}`}>
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};