import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
// Fix: The 'Language' type is defined in 'types.ts', not 'constants.ts'.
import { LANGUAGES } from './constants';
import type { Language } from './types';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fa');

  useEffect(() => {
    const langConfig = LANGUAGES.find(l => l.code === language);
    if (langConfig) {
      document.documentElement.lang = langConfig.code;
      document.documentElement.dir = langConfig.dir;
      document.body.className = `font-${langConfig.fontFamily} bg-bg-cream text-text-dark`;
    }
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentLanguage={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        <HomePage language={language} />
      </main>
      <Footer language={language}/>
    </div>
  );
};

export default App;