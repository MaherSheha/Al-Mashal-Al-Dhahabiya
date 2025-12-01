import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, toggleLanguage, dir } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.expertise, href: '#expertise' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-full transition-colors border-2 ${isScrolled ? 'border-gold-400 text-gold-600' : 'border-gold-400/50 text-gold-400 backdrop-blur-sm'}`}>
              <Building2 size={24} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-start">
              <span className={`font-bold text-lg leading-none mb-1 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Al-Mashal Al-Dhahabiya
              </span>
              <span className={`text-xs font-medium ${isScrolled ? 'text-gold-600' : 'text-gold-400'}`}>
                مؤسسة المشعل الذهبية
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                    isScrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Language Switcher Desktop */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                isScrolled 
                  ? 'bg-slate-100 text-slate-900 hover:bg-slate-200' 
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Globe size={14} />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
             {/* Language Switcher Mobile */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                isScrolled 
                  ? 'bg-slate-100 text-slate-900' 
                  : 'bg-white/10 text-white backdrop-blur-sm'
              }`}
            >
              <Globe size={14} />
              {language === 'en' ? 'AR' : 'EN'}
            </button>

            <button
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 border-t' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-6 py-3 text-slate-700 hover:bg-gold-50 hover:text-gold-600 font-medium ${language === 'ar' ? 'text-right' : 'text-left'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};