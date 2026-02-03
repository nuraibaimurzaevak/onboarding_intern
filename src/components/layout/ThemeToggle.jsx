import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <button 
      className="theme-toggle-circle"
      onClick={handleClick}
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
      title={isDark ? 'Включить дневной режим' : 'Включить ночной режим'}
    >
      {isDark ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6.34314 6.34314L4.92893 4.92893" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19.0711 19.0711L17.6569 17.6569" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17.6569 6.34314L19.0711 4.92893" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4.92893 19.0711L6.34314 17.6569" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79C20.8427 14.492 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88299 19.5345 5.67422 18.3258C4.46545 17.117 3.62593 15.589 3.2539 13.9205C2.88187 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53323 4.84175C7.88562 3.79614 9.50797 3.15731 11.21 3C10.2134 4.34827 9.73384 6.00945 9.85849 7.68141C9.98314 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0169 16.3186 14.1415C17.9906 14.2662 19.6517 13.7866 21 12.79Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
      )}
    </button>
  );
};

export default ThemeToggle;