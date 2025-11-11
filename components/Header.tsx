import React from 'react';
import type { Language } from '../types';
import { LANGUAGES, UI_TEXTS } from '../constants';

interface HeaderProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLanguage, setLanguage }) => {
  const texts = UI_TEXTS[currentLanguage];

  return (
    <header className="bg-bg-cream/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-blue">🧸</span>
            <h1 className="ms-2 text-xl font-bold text-text-dark">{texts.logo}</h1>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  currentLanguage === lang.code
                    ? 'bg-primary-blue text-white shadow'
                    : 'text-text-light hover:bg-gray-200/50'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
