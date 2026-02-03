import React, { useState } from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('RU');

  const languages = [
    { code: 'RU', label: 'RU' },
    { code: 'EN', label: 'EN' },
    { code: 'KG', label: 'KG' }
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${currentLang === lang.code ? 'active' : ''}`}
          onClick={() => setCurrentLang(lang.code)}
          title={lang.code === 'RU' ? 'Русский' : lang.code === 'EN' ? 'English' : 'Кыргызча'}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;