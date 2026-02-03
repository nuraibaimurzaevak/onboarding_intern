import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import './Instructions.css';

const Instructions = () => {
  return (
    <MainLayout>
      <div className="instructions-page">
        <h1>Инструкция</h1>
        <p>Руководство по использованию платформы.</p>
        <div className="coming-soon">
          <h2>Инструкция готовится</h2>
          <p>В этом разделе будет подробная инструкция по работе с платформой.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Instructions;