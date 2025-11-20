import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-slate-50" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-bold uppercase tracking-wide text-sm mb-2">{t.contact.subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{t.contact.title}</h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-gold-50 p-3 rounded-lg text-gold-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.phone}</h4>
                <p className="text-slate-600 text-sm" dir="ltr">+966 50 037 5570</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-gold-50 p-3 rounded-lg text-gold-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.email}</h4>
                <p className="text-slate-600 text-sm">almeshalgolden0@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-gold-50 p-3 rounded-lg text-gold-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.location}</h4>
                <p className="text-slate-600 text-sm whitespace-pre-line">
                  {t.contact.info.address}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-gold-50 p-3 rounded-lg text-gold-600">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.hours}</h4>
                <p className="text-slate-600 text-sm whitespace-pre-line">{t.contact.info.time}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.form.title}</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                    placeholder={dir === 'ltr' ? "John Doe" : "الاسم"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.phone}</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-left"
                    dir="ltr"
                    placeholder="+966..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-left"
                  dir="ltr"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.service}</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-white">
                  {t.contact.form.serviceOptions.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.message}</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none"
                  placeholder={dir === 'ltr' ? "Tell us about your project..." : "أخبرنا عن مشروعك..."}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-gold-500 hover:text-slate-900 transition-all duration-300 shadow-lg"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};