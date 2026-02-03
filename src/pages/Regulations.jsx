import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import './Regulations.css';

const Regulations = () => {
  return (
    <MainLayout>
      <div className="regulations-page">
        <h1>Регламенты</h1>
        <p>Централизованное хранилище внутренних документов компании.</p>
        <div className="coming-soon">
          <h2>Раздел в разработке</h2>
          <p>Здесь будут доступны все регламенты и инструкции компании.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Regulations;