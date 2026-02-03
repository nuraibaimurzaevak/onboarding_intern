import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>Загрузка системы онбординга</h2>
        <p>Пожалуйста, подождите...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;